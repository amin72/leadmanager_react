from django.urls import path, include
from knox import views as knox_views
from .api import RegisterAPI, LoginAPI, UserAPI


urlpatterns = [
    # Register user
    path('api/auth/register/', RegisterAPI.as_view(), name='register'),

    # Login user
    path('api/auth/login/', LoginAPI.as_view(), name='login'),

    # Get user
    path('api/auth/user/', UserAPI.as_view(), name='user'),

    # Logout user
    path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),

    # know urls
    path('api/auth/', include('knox.urls')),
]
