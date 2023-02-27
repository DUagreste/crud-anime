from rest_framework import routers
from .api import CrudAnimeViewSet

router = routers.DefaultRouter()

router.register('api/anime', CrudAnimeViewSet, 'anime')

urlpatterns = router.urls