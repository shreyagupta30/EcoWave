from django.urls import path
from .views import UserDetailsView

urlpatterns = [
    path('users/details/', UserDetailsView.as_view(), name='user-details'),
]