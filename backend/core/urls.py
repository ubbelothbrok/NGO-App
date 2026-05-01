from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.HomeDataView.as_view(), name='home-data'),
    path('branches/', views.BranchListView.as_view(), name='branch-list'),
    path('activities/', views.ActivityListView.as_view(), name='activity-list'),
    path('gallery/', views.GalleryListView.as_view(), name='gallery-list'),
    path('contact/', views.ContactMessageCreateView.as_view(), name='contact-create'),
    path('testimonials/', views.TestimonialListView.as_view(), name='testimonial-list'),
    path('settings/', views.SiteSettingsView.as_view(), name='site-settings'),
]
