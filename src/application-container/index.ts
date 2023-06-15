/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}
  */
  readonly archiveUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}
  */
  readonly availabilityDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}
  */
  readonly deploymentFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}
  */
  readonly gitPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}
  */
  readonly gitRepository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}
  */
  readonly gitUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}
  */
  readonly loadBalancerSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}
  */
  readonly manifestFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}
  */
  readonly subscriptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * deployment block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment ApplicationContainer#deployment}
  */
  readonly deployment?: ApplicationContainerDeployment;
  /**
  * manifest block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest ApplicationContainer#manifest}
  */
  readonly manifest?: ApplicationContainerManifest;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#timeouts ApplicationContainer#timeouts}
  */
  readonly timeouts?: ApplicationContainerTimeouts;
}
export interface ApplicationContainerDeploymentServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}
  */
  readonly username: string;
}

export function applicationContainerDeploymentServicesToTerraform(struct?: ApplicationContainerDeploymentServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ApplicationContainerDeploymentServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationContainerDeploymentServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerDeploymentServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._name = undefined;
      this._password = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._name = value.name;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ApplicationContainerDeploymentServicesList extends cdktf.ComplexList {
  public internalValue? : ApplicationContainerDeploymentServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationContainerDeploymentServicesOutputReference {
    return new ApplicationContainerDeploymentServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationContainerDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}
  */
  readonly instances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}
  */
  readonly javaSystemProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}
  */
  readonly secureEnvironment?: string[];
  /**
  * services block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#services ApplicationContainer#services}
  */
  readonly services?: ApplicationContainerDeploymentServices[] | cdktf.IResolvable;
}

export function applicationContainerDeploymentToTerraform(struct?: ApplicationContainerDeploymentOutputReference | ApplicationContainerDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    instances: cdktf.numberToTerraform(struct!.instances),
    java_system_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.javaSystemProperties),
    memory: cdktf.stringToTerraform(struct!.memory),
    notes: cdktf.stringToTerraform(struct!.notes),
    secure_environment: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secureEnvironment),
    services: cdktf.listMapper(applicationContainerDeploymentServicesToTerraform, true)(struct!.services),
  }
}

export class ApplicationContainerDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationContainerDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._javaSystemProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaSystemProperties = this._javaSystemProperties;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._secureEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEnvironment = this._secureEnvironment;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._instances = undefined;
      this._javaSystemProperties = undefined;
      this._memory = undefined;
      this._notes = undefined;
      this._secureEnvironment = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._instances = value.instances;
      this._javaSystemProperties = value.javaSystemProperties;
      this._memory = value.memory;
      this._notes = value.notes;
      this._secureEnvironment = value.secureEnvironment;
      this._services.internalValue = value.services;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // java_system_properties - computed: false, optional: true, required: false
  private _javaSystemProperties?: { [key: string]: string }; 
  public get javaSystemProperties() {
    return this.getStringMapAttribute('java_system_properties');
  }
  public set javaSystemProperties(value: { [key: string]: string }) {
    this._javaSystemProperties = value;
  }
  public resetJavaSystemProperties() {
    this._javaSystemProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaSystemPropertiesInput() {
    return this._javaSystemProperties;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // secure_environment - computed: false, optional: true, required: false
  private _secureEnvironment?: string[]; 
  public get secureEnvironment() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_environment'));
  }
  public set secureEnvironment(value: string[]) {
    this._secureEnvironment = value;
  }
  public resetSecureEnvironment() {
    this._secureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEnvironmentInput() {
    return this._secureEnvironment;
  }

  // services - computed: false, optional: true, required: false
  private _services = new ApplicationContainerDeploymentServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: ApplicationContainerDeploymentServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface ApplicationContainerManifestRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}
  */
  readonly buildAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}
  */
  readonly version?: string;
}

export function applicationContainerManifestReleaseToTerraform(struct?: ApplicationContainerManifestReleaseOutputReference | ApplicationContainerManifestRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: cdktf.stringToTerraform(struct!.buildAttribute),
    commit: cdktf.stringToTerraform(struct!.commit),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class ApplicationContainerManifestReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationContainerManifestRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerManifestRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._build = undefined;
      this._commit = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._build = value.buildAttribute;
      this._commit = value.commit;
      this._version = value.version;
    }
  }

  // build - computed: false, optional: true, required: false
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApplicationContainerManifestRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}
  */
  readonly majorVersion: string;
}

export function applicationContainerManifestRuntimeToTerraform(struct?: ApplicationContainerManifestRuntimeOutputReference | ApplicationContainerManifestRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major_version: cdktf.stringToTerraform(struct!.majorVersion),
  }
}

export class ApplicationContainerManifestRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationContainerManifestRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._majorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersion = this._majorVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerManifestRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._majorVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._majorVersion = value.majorVersion;
    }
  }

  // major_version - computed: false, optional: false, required: true
  private _majorVersion?: string; 
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }
  public set majorVersion(value: string) {
    this._majorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }
}
export interface ApplicationContainerManifest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}
  */
  readonly clustered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}
  */
  readonly healthCheckEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}
  */
  readonly home?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}
  */
  readonly shutdownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}
  */
  readonly startupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}
  */
  readonly type?: string;
  /**
  * release block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#release ApplicationContainer#release}
  */
  readonly release?: ApplicationContainerManifestRelease;
  /**
  * runtime block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}
  */
  readonly runtime?: ApplicationContainerManifestRuntime;
}

export function applicationContainerManifestToTerraform(struct?: ApplicationContainerManifestOutputReference | ApplicationContainerManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clustered: cdktf.booleanToTerraform(struct!.clustered),
    command: cdktf.stringToTerraform(struct!.command),
    health_check_endpoint: cdktf.stringToTerraform(struct!.healthCheckEndpoint),
    home: cdktf.stringToTerraform(struct!.home),
    mode: cdktf.stringToTerraform(struct!.mode),
    notes: cdktf.stringToTerraform(struct!.notes),
    shutdown_time: cdktf.numberToTerraform(struct!.shutdownTime),
    startup_time: cdktf.numberToTerraform(struct!.startupTime),
    type: cdktf.stringToTerraform(struct!.type),
    release: applicationContainerManifestReleaseToTerraform(struct!.release),
    runtime: applicationContainerManifestRuntimeToTerraform(struct!.runtime),
  }
}

export class ApplicationContainerManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationContainerManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clustered !== undefined) {
      hasAnyValues = true;
      internalValueResult.clustered = this._clustered;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._healthCheckEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckEndpoint = this._healthCheckEndpoint;
    }
    if (this._home !== undefined) {
      hasAnyValues = true;
      internalValueResult.home = this._home;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._shutdownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownTime = this._shutdownTime;
    }
    if (this._startupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupTime = this._startupTime;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._release?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release?.internalValue;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clustered = undefined;
      this._command = undefined;
      this._healthCheckEndpoint = undefined;
      this._home = undefined;
      this._mode = undefined;
      this._notes = undefined;
      this._shutdownTime = undefined;
      this._startupTime = undefined;
      this._type = undefined;
      this._release.internalValue = undefined;
      this._runtime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clustered = value.clustered;
      this._command = value.command;
      this._healthCheckEndpoint = value.healthCheckEndpoint;
      this._home = value.home;
      this._mode = value.mode;
      this._notes = value.notes;
      this._shutdownTime = value.shutdownTime;
      this._startupTime = value.startupTime;
      this._type = value.type;
      this._release.internalValue = value.release;
      this._runtime.internalValue = value.runtime;
    }
  }

  // clustered - computed: false, optional: true, required: false
  private _clustered?: boolean | cdktf.IResolvable; 
  public get clustered() {
    return this.getBooleanAttribute('clustered');
  }
  public set clustered(value: boolean | cdktf.IResolvable) {
    this._clustered = value;
  }
  public resetClustered() {
    this._clustered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteredInput() {
    return this._clustered;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // health_check_endpoint - computed: false, optional: true, required: false
  private _healthCheckEndpoint?: string; 
  public get healthCheckEndpoint() {
    return this.getStringAttribute('health_check_endpoint');
  }
  public set healthCheckEndpoint(value: string) {
    this._healthCheckEndpoint = value;
  }
  public resetHealthCheckEndpoint() {
    this._healthCheckEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEndpointInput() {
    return this._healthCheckEndpoint;
  }

  // home - computed: false, optional: true, required: false
  private _home?: string; 
  public get home() {
    return this.getStringAttribute('home');
  }
  public set home(value: string) {
    this._home = value;
  }
  public resetHome() {
    this._home = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeInput() {
    return this._home;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // shutdown_time - computed: false, optional: true, required: false
  private _shutdownTime?: number; 
  public get shutdownTime() {
    return this.getNumberAttribute('shutdown_time');
  }
  public set shutdownTime(value: number) {
    this._shutdownTime = value;
  }
  public resetShutdownTime() {
    this._shutdownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownTimeInput() {
    return this._shutdownTime;
  }

  // startup_time - computed: false, optional: true, required: false
  private _startupTime?: number; 
  public get startupTime() {
    return this.getNumberAttribute('startup_time');
  }
  public set startupTime(value: number) {
    this._startupTime = value;
  }
  public resetStartupTime() {
    this._startupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTimeInput() {
    return this._startupTime;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // release - computed: false, optional: true, required: false
  private _release = new ApplicationContainerManifestReleaseOutputReference(this, "release");
  public get release() {
    return this._release;
  }
  public putRelease(value: ApplicationContainerManifestRelease) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new ApplicationContainerManifestRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: ApplicationContainerManifestRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }
}
export interface ApplicationContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}
  */
  readonly delete?: string;
}

export function applicationContainerTimeoutsToTerraform(struct?: ApplicationContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ApplicationContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationContainerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationContainerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container oraclepaas_application_container}
*/
export class ApplicationContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas_application_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container oraclepaas_application_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationContainerConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas_application_container',
      terraformGeneratorMetadata: {
        providerName: 'oraclepaas',
        providerVersion: '1.5.3',
        providerVersionConstraint: '~> 1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveUrl = config.archiveUrl;
    this._authType = config.authType;
    this._availabilityDomain = config.availabilityDomain;
    this._deploymentFile = config.deploymentFile;
    this._gitPassword = config.gitPassword;
    this._gitRepository = config.gitRepository;
    this._gitUsername = config.gitUsername;
    this._id = config.id;
    this._loadBalancerSubnets = config.loadBalancerSubnets;
    this._manifestFile = config.manifestFile;
    this._name = config.name;
    this._notes = config.notes;
    this._notificationEmail = config.notificationEmail;
    this._region = config.region;
    this._runtime = config.runtime;
    this._subscriptionType = config.subscriptionType;
    this._tags = config.tags;
    this._deployment.internalValue = config.deployment;
    this._manifest.internalValue = config.manifest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_url - computed: true, optional: false, required: false
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }

  // archive_url - computed: false, optional: true, required: false
  private _archiveUrl?: string; 
  public get archiveUrl() {
    return this.getStringAttribute('archive_url');
  }
  public set archiveUrl(value: string) {
    this._archiveUrl = value;
  }
  public resetArchiveUrl() {
    this._archiveUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrlInput() {
    return this._archiveUrl;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string[]; 
  public get availabilityDomain() {
    return this.getListAttribute('availability_domain');
  }
  public set availabilityDomain(value: string[]) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // deployment_file - computed: false, optional: true, required: false
  private _deploymentFile?: string; 
  public get deploymentFile() {
    return this.getStringAttribute('deployment_file');
  }
  public set deploymentFile(value: string) {
    this._deploymentFile = value;
  }
  public resetDeploymentFile() {
    this._deploymentFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFileInput() {
    return this._deploymentFile;
  }

  // git_password - computed: false, optional: true, required: false
  private _gitPassword?: string; 
  public get gitPassword() {
    return this.getStringAttribute('git_password');
  }
  public set gitPassword(value: string) {
    this._gitPassword = value;
  }
  public resetGitPassword() {
    this._gitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPasswordInput() {
    return this._gitPassword;
  }

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository?: string; 
  public get gitRepository() {
    return this.getStringAttribute('git_repository');
  }
  public set gitRepository(value: string) {
    this._gitRepository = value;
  }
  public resetGitRepository() {
    this._gitRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository;
  }

  // git_username - computed: false, optional: true, required: false
  private _gitUsername?: string; 
  public get gitUsername() {
    return this.getStringAttribute('git_username');
  }
  public set gitUsername(value: string) {
    this._gitUsername = value;
  }
  public resetGitUsername() {
    this._gitUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernameInput() {
    return this._gitUsername;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // load_balancer_subnets - computed: false, optional: true, required: false
  private _loadBalancerSubnets?: string[]; 
  public get loadBalancerSubnets() {
    return this.getListAttribute('load_balancer_subnets');
  }
  public set loadBalancerSubnets(value: string[]) {
    this._loadBalancerSubnets = value;
  }
  public resetLoadBalancerSubnets() {
    this._loadBalancerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSubnetsInput() {
    return this._loadBalancerSubnets;
  }

  // manifest_file - computed: false, optional: true, required: false
  private _manifestFile?: string; 
  public get manifestFile() {
    return this.getStringAttribute('manifest_file');
  }
  public set manifestFile(value: string) {
    this._manifestFile = value;
  }
  public resetManifestFile() {
    this._manifestFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileInput() {
    return this._manifestFile;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // subscription_type - computed: false, optional: true, required: false
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  public resetSubscriptionType() {
    this._subscriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new ApplicationContainerDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: ApplicationContainerDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest = new ApplicationContainerManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ApplicationContainerManifest) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationContainerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_url: cdktf.stringToTerraform(this._archiveUrl),
      auth_type: cdktf.stringToTerraform(this._authType),
      availability_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityDomain),
      deployment_file: cdktf.stringToTerraform(this._deploymentFile),
      git_password: cdktf.stringToTerraform(this._gitPassword),
      git_repository: cdktf.stringToTerraform(this._gitRepository),
      git_username: cdktf.stringToTerraform(this._gitUsername),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerSubnets),
      manifest_file: cdktf.stringToTerraform(this._manifestFile),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      region: cdktf.stringToTerraform(this._region),
      runtime: cdktf.stringToTerraform(this._runtime),
      subscription_type: cdktf.stringToTerraform(this._subscriptionType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      deployment: applicationContainerDeploymentToTerraform(this._deployment.internalValue),
      manifest: applicationContainerManifestToTerraform(this._manifest.internalValue),
      timeouts: applicationContainerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
