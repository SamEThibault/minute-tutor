#!/bin/bash

echo "ENSURE YOU HAVE A PYTHON ENVIRONMENT CALLED 'pyenv' in backend/"
source backend/pyenv/Scripts/activate &&
pip install -r backend/requirements.txt &&
cd backend/app &&
export FLASK_APP=__init__.py &&
flask run --host=0.0.0.0