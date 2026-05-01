from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Branch, Activity, GalleryItem, ContactMessage, Testimonial, SiteSettings
from .serializers import (
    BranchSerializer, ActivitySerializer, GalleryItemSerializer,
    ContactMessageSerializer, TestimonialSerializer, SiteSettingsSerializer
)


class BranchListView(generics.ListAPIView):
    serializer_class = BranchSerializer

    def get_queryset(self):
        region = self.request.query_params.get('region', None)
        queryset = Branch.objects.filter(is_active=True)
        if region:
            queryset = queryset.filter(region=region)
        return queryset


class ActivityListView(generics.ListAPIView):
    queryset = Activity.objects.filter(is_active=True)
    serializer_class = ActivitySerializer


class GalleryListView(generics.ListAPIView):
    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        queryset = GalleryItem.objects.all()
        if category:
            queryset = queryset.filter(category=category)
        return queryset


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'success': True, 'message': 'Your message has been sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(
            {'success': False, 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )


class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer


class SiteSettingsView(APIView):
    def get(self, request):
        settings_obj, _ = SiteSettings.objects.get_or_create(pk=1)
        serializer = SiteSettingsSerializer(settings_obj)
        return Response(serializer.data)


class HomeDataView(APIView):
    """Single endpoint to fetch all home page data."""
    def get(self, request):
        activities = Activity.objects.filter(is_active=True)[:6]
        testimonials = Testimonial.objects.filter(is_active=True)[:3]
        india_branches = Branch.objects.filter(is_active=True, region='india').count()
        world_branches = Branch.objects.filter(is_active=True, region='worldwide').count()

        return Response({
            'activities': ActivitySerializer(activities, many=True, context={'request': request}).data,
            'testimonials': TestimonialSerializer(testimonials, many=True, context={'request': request}).data,
            'stats': {
                'india_branches': india_branches,
                'world_branches': world_branches,
                'years_of_service': 107,
                'lives_impacted': '10L+',
            }
        })
