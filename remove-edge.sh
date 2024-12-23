#!/bin/bash
find src/app -type f -name "*.tsx" -exec sed -i '' '/export const runtime = "edge";/d' {} +
