from django.urls import path
from rest_framework import routers
from .api import LeadViewSet

# app_name = 'leads'

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
