from rest_framework import routers
from .api import AnimesViewSet

router = routers.DefaultRouter()

router.register('api/anime', AnimesViewSet, 'anime')

urlpatterns = router.urls