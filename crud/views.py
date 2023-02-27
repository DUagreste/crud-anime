from .models import Animes, Mangas
from .serializers import AnimesSerializer, MangasSerializer

from rest_framework.parsers import JSONParser
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.core.files.storage import default_storage


@csrf_exempt
def animeApi(request, id=0):
    if request.method == 'GET':
        animes = Animes.objects.all()
        animes_serializer = AnimesSerializer(animes, many=True)
        return JsonResponse(animes_serializer.data, safe=False)
    
    elif request.method == 'POST':
        anime_data = JSONParser().parse(request)
        anime_serializer = AnimesSerializer(data=anime_data)
        if anime_serializer.is_valid():
            anime_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method == 'PUT':
        anime_data = JSONParser().parse(request)
        anime = Animes.objects.get(AnimeID=anime_data['AnimeID'])
        anime_serializer = AnimesSerializer(anime, data=anime_data)
        if anime_serializer.is_valid():
            anime_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    
    elif request.method == 'DELETE':
        anime = Animes.objects.get(AnimeID=id)
        anime.delete()
        return JsonResponse("Deleted Successfully!", safe=False)
    

@csrf_exempt
def mangaApi(request, id=0):
    if request.method == 'GET':
        mangas = Mangas.objects.all()
        mangas_serializer = MangasSerializer(mangas, many=True)
        return JsonResponse(mangas_serializer.data, safe=False)
    
    elif request.method == 'POST':
        manga_data = JSONParser().parse(request)
        manga_serializer = MangasSerializer(data=manga_data)
        if manga_serializer.is_valid():
            manga_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method == 'PUT':
        manga_data = JSONParser().parse(request)
        manga = Mangas.objects.get(MangaID=manga_data['MangaID'])
        manga_serializer = MangasSerializer(manga, data=manga_data)
        if manga_serializer.is_valid():
            manga_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    
    elif request.method == 'DELETE':
        manga = Mangas.objects.get(MangaID=id)
        manga.delete()
        return JsonResponse("Deleted Successfully!", safe=False)
    

@csrf_exempt
def SaveFile(request):
    file = request.FILES['myFile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)