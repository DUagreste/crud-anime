from .models import CrudAnime
from rest_framework import viewsets, permissions
from .serializers import CrudAnimeSerializer

class CrudAnimeViewSet(viewsets.ModelViewSet):
    queryset = CrudAnime.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CrudAnimeSerializer