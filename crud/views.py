from .models import Animes, Mangas
from .serializers import AnimesSerializer, MangasSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def animeApi(request, id=None):
    if id:
        anime = get_object_or_404(Animes, id=id)
        if request.method == 'GET':
            anime_serializer = AnimesSerializer(anime)
            return Response(anime_serializer.data)
        elif request.method == 'PUT':
            anime_serializer = AnimesSerializer(anime, data=request.data)
            if anime_serializer.is_valid():
                anime_serializer.save()
                return Response({'message': 'Anime updated successfully'})
            return Response(anime_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            anime.delete()
            return Response({'message': 'Anime deleted successfully'})
    else:
        if request.method == 'GET':
            animes = Animes.objects.all()
            animes_serializer = AnimesSerializer(animes, many=True)
            return Response(animes_serializer.data)
        elif request.method == 'POST':
            anime_serializer = AnimesSerializer(data=request.data)
            if anime_serializer.is_valid():
                anime_serializer.save()
                return Response({'message': 'Anime created successfully'}, status=status.HTTP_201_CREATED)
            return Response(anime_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def mangaApi(request, id=None):
    if id:
        manga = get_object_or_404(Mangas, id=id)
        if request.method == 'GET':
            manga_serializer = MangasSerializer(manga)
            return Response(manga_serializer.data)
        elif request.method == 'PUT':
            manga_serializer = MangasSerializer(manga, data=request.data)
            if manga_serializer.is_valid():
                manga_serializer.save()
                return Response({'message': 'Manga updated successfully'})
            return Response(manga_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            manga.delete()
            return Response({'message': 'Manga deleted successfully'})
    else:
        if request.method == 'GET':
            mangas = Mangas.objects.all()
            mangas_serializer = MangasSerializer(mangas, many=True)
            return Response(mangas_serializer.data)
        elif request.method == 'POST':
            manga_serializer = MangasSerializer(data=request.data)
            if manga_serializer.is_valid():
                manga_serializer.save()
                return Response({'message': 'Manga created successfully'}, status=status.HTTP_201_CREATED)
            return Response(manga_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
def SaveFile(request):
    if request.method == 'POST' and request.FILES['myFile']:
        file = request.FILES['myFile']
        if not file.content_type in ['image/jpeg', 'image/png']:
            return JsonResponse("Invalid file type. Only JPEG and PNG files are allowed.", safe=False)
        if file.size > 10485760:
            return JsonResponse("File size is too large. Maximum allowed size is 10MB.", safe=False)
        file_name = default_storage.save(file.name, file)
        return JsonResponse(file_name, safe=False)
    return JsonResponse("Failed to save file.", safe=False)