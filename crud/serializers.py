from rest_framework import serializers
from .models import Animes, Mangas


class AnimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animes
        fields = ('AnimeId',
                  'AnimeTitle',
                  'AnimeScore',
                  'AnimeSynopsis',
                  'AnimeEpisodes',
                  'AnimeGenres',
                  'AnimeStudios')


class MangasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mangas
        fields = ('MangaId',
                  'MangaTitle',
                  'MangaScore',
                  'MangaSynopsis',
                  'MangaEpisodes',
                  'MangaGenres',
                  'MangaStudios')