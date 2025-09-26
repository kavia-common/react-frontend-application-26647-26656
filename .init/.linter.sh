#!/bin/bash
cd /home/kavia/workspace/code-generation/react-frontend-application-26647-26656/frontend_application
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

