from rest_framework import generics
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

class UserDetailsView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_object(self):
        username = self.request.query_params.get('username')
        user = get_object_or_404(User, username=username)
        return user

    def perform_create(self, serializer):
        # Create a new user if 'username' query parameter is not provided
        username = self.request.query_params.get('username')
        if not username:
            serializer.save()
