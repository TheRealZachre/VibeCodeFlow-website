#!/usr/bin/env bash
set -euo pipefail

npm run build
bash scripts/cloudflare-deploy.sh
