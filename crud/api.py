from .models import Animes
from rest_framework import viewsets, permissions
from .serializers import AnimesSerializer

class AnimesViewSet(viewsets.ModelViewSet):
    queryset = Animes.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AnimesSerializer