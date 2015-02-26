#!/usr/bin/env bash
DEFAULT="ilan.g"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=span-cloud-coe-ilan
DIR=_site/
aws  s3  sync $DIR s3://$BUCKET/ --profile "$PROFILE"