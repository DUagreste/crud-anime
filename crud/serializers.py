from rest_framework import serializers
from .models import Animes, Mangas


class AnimesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animes
        fields = ('id',
                  'title',
                  'score',
                  'synopsis',
                  'episodes',
                  'genres',
                  'studios')


class MangasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mangas
        fields = ('id',
                  'title',
                  'score',
                  'synopsis',
                  'author',
                  'chapters',
                  'demographic',
                  'publisher')