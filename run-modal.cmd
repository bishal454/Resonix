@echo off
REM Simple batch script to run modal commands with the correct environment

REM Activate virtual environment
call "%~dp0.venv\Scripts\activate.bat"

REM Run modal with all arguments
"%~dp0.venv\Scripts\python.exe" -m modal %*
