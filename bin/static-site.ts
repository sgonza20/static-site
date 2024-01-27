#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { MyStaticSiteStack } from '../lib/static-site-stack'
//import { AwsSolutionsChecks } from 'cdk-nag'
//import { Aspects } from 'aws-cdk-lib';

const app = new cdk.App()
//Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }))
new MyStaticSiteStack(app, 'StaticSiteStack', {

  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }

})
