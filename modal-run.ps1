# PowerShell script to run Modal with the correct environment

# Activate virtual environment and run modal
& "$PSScriptRoot\.venv\Scripts\Activate.ps1"

# Set environment variables from .env file
$envFile = "$PSScriptRoot\.env"
if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]*)\s*=\s*(.*)$') {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim().Trim('"')
            [Environment]::SetEnvironmentVariable($key, $value, 'Process')
        }
    }
}

# Run modal with the venv's Python
& "$PSScriptRoot\.venv\Scripts\python.exe" -m modal @args
