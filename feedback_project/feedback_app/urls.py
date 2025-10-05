from django.urls import path
from . import views

urlpatterns = [
    path('feedbacks/', views.feedback_list, name='feedback_list'),
]