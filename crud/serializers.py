from rest_framework import serializers
from .models import CrudAnime


class CrudAnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrudAnime
        fields = ('id', 'title', 'score', 'synopsis', 'episodes', 'genres', 'studios')
