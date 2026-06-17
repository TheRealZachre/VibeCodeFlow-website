#!/usr/bin/env bash
set -euo pipefail

secrets_file=""
if [ -n "${NEXTAUTH_SECRET:-}" ]; then
  secrets_file="$(mktemp)"
  trap 'rm -f "$secrets_file"' EXIT
  printf 'NEXTAUTH_SECRET=%s\n' "$NEXTAUTH_SECRET" >> "$secrets_file"
  npx opennextjs-cloudflare upload --secrets-file "$secrets_file"
else
  npx opennextjs-cloudflare upload
fi

npx wrangler deploy
