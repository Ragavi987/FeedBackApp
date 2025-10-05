from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Feedback
from .serializers import FeedbackSerializer

@api_view(['GET', 'POST'])
def feedback_list(request):
    if request.method == 'GET':
        feedbacks = Feedback.objects.all().order_by('-created_at')
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Feedback submitted successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
