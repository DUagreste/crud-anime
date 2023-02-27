from django.urls import path, re_path
from crud import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r'^anime/$', views.animeApi),
    re_path(r'^anime/([0-9]+)$', views.animeApi),

    re_path(r'^manga/$', views.mangaApi),
    re_path(r'^manga/([0-9]+)$', views.mangaApi),

    re_path(r'^Anime/SaveFile$', views.SaveFile),
    re_path(r'^Manga/SaveFile$', views.SaveFile),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)