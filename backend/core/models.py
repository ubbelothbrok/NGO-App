from django.db import models


class Branch(models.Model):
    REGION_CHOICES = [
        ('india', 'India'),
        ('worldwide', 'Worldwide'),
    ]
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=300)
    region = models.CharField(max_length=20, choices=REGION_CHOICES, default='india')
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Branches'

    def __str__(self):
        return f"{self.name} - {self.location}"


class Activity(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=100, blank=True, help_text='Font Awesome icon class')
    image = models.ImageField(upload_to='activities/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Activities'

    def __str__(self):
        return self.title


class GalleryItem(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery/')
    category = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=300)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    avatar = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class SiteSettings(models.Model):
    """Singleton model for global site settings."""
    org_name = models.CharField(max_length=200, default='Bharat Sevashram Sangha, Garia')
    tagline = models.CharField(max_length=300, blank=True)
    address = models.TextField(default='58 Pranavananda Road, Garia, South 24 Paragana, Kolkata-700084')
    phone1 = models.CharField(max_length=20, default='+91-9434012856')
    phone2 = models.CharField(max_length=20, blank=True)
    email = models.EmailField(default='contact@bssgaria.org')
    facebook_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)
    donation_account_info = models.TextField(blank=True)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'

    def __str__(self):
        return 'Site Settings'
