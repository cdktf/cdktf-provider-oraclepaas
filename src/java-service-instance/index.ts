// https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JavaServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#availability_domain JavaServiceInstance#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_destination JavaServiceInstance#backup_destination}
  */
  readonly backupDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}
  */
  readonly bringYourOwnLicense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#description JavaServiceInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#desired_state JavaServiceInstance#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#edition JavaServiceInstance#edition}
  */
  readonly edition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}
  */
  readonly enableAdminConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#force_delete JavaServiceInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#id JavaServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_network JavaServiceInstance#ip_network}
  */
  readonly ipNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#level JavaServiceInstance#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}
  */
  readonly meteringFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#notification_email JavaServiceInstance#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#region JavaServiceInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#service_version JavaServiceInstance#service_version}
  */
  readonly serviceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#source_service_name JavaServiceInstance#source_service_name}
  */
  readonly sourceServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnet JavaServiceInstance#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}
  */
  readonly useIdentityService?: boolean | cdktf.IResolvable;
  /**
  * backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backups JavaServiceInstance#backups}
  */
  readonly backups: JavaServiceInstanceBackups;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancer JavaServiceInstance#load_balancer}
  */
  readonly loadBalancer?: JavaServiceInstanceLoadBalancer;
  /**
  * oracle_traffic_director block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#oracle_traffic_director JavaServiceInstance#oracle_traffic_director}
  */
  readonly oracleTrafficDirector?: JavaServiceInstanceOracleTrafficDirector;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#timeouts JavaServiceInstance#timeouts}
  */
  readonly timeouts?: JavaServiceInstanceTimeouts;
  /**
  * weblogic_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#weblogic_server JavaServiceInstance#weblogic_server}
  */
  readonly weblogicServer: JavaServiceInstanceWeblogicServer;
}
export interface JavaServiceInstanceBackups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#auto_generate JavaServiceInstance#auto_generate}
  */
  readonly autoGenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}
  */
  readonly cloudStorageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}
  */
  readonly cloudStoragePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}
  */
  readonly cloudStorageUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}
  */
  readonly useOauthForStorage?: boolean | cdktf.IResolvable;
}

export function javaServiceInstanceBackupsToTerraform(struct?: JavaServiceInstanceBackupsOutputReference | JavaServiceInstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_generate: cdktf.booleanToTerraform(struct!.autoGenerate),
    cloud_storage_container: cdktf.stringToTerraform(struct!.cloudStorageContainer),
    cloud_storage_password: cdktf.stringToTerraform(struct!.cloudStoragePassword),
    cloud_storage_username: cdktf.stringToTerraform(struct!.cloudStorageUsername),
    use_oauth_for_storage: cdktf.booleanToTerraform(struct!.useOauthForStorage),
  }
}


export function javaServiceInstanceBackupsToHclTerraform(struct?: JavaServiceInstanceBackupsOutputReference | JavaServiceInstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_generate: {
      value: cdktf.booleanToHclTerraform(struct!.autoGenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_storage_container: {
      value: cdktf.stringToHclTerraform(struct!.cloudStorageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_storage_password: {
      value: cdktf.stringToHclTerraform(struct!.cloudStoragePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_storage_username: {
      value: cdktf.stringToHclTerraform(struct!.cloudStorageUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_oauth_for_storage: {
      value: cdktf.booleanToHclTerraform(struct!.useOauthForStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGenerate = this._autoGenerate;
    }
    if (this._cloudStorageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageContainer = this._cloudStorageContainer;
    }
    if (this._cloudStoragePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePassword = this._cloudStoragePassword;
    }
    if (this._cloudStorageUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageUsername = this._cloudStorageUsername;
    }
    if (this._useOauthForStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOauthForStorage = this._useOauthForStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoGenerate = undefined;
      this._cloudStorageContainer = undefined;
      this._cloudStoragePassword = undefined;
      this._cloudStorageUsername = undefined;
      this._useOauthForStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoGenerate = value.autoGenerate;
      this._cloudStorageContainer = value.cloudStorageContainer;
      this._cloudStoragePassword = value.cloudStoragePassword;
      this._cloudStorageUsername = value.cloudStorageUsername;
      this._useOauthForStorage = value.useOauthForStorage;
    }
  }

  // auto_generate - computed: false, optional: true, required: false
  private _autoGenerate?: boolean | cdktf.IResolvable; 
  public get autoGenerate() {
    return this.getBooleanAttribute('auto_generate');
  }
  public set autoGenerate(value: boolean | cdktf.IResolvable) {
    this._autoGenerate = value;
  }
  public resetAutoGenerate() {
    this._autoGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateInput() {
    return this._autoGenerate;
  }

  // cloud_storage_container - computed: false, optional: false, required: true
  private _cloudStorageContainer?: string; 
  public get cloudStorageContainer() {
    return this.getStringAttribute('cloud_storage_container');
  }
  public set cloudStorageContainer(value: string) {
    this._cloudStorageContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageContainerInput() {
    return this._cloudStorageContainer;
  }

  // cloud_storage_password - computed: true, optional: true, required: false
  private _cloudStoragePassword?: string; 
  public get cloudStoragePassword() {
    return this.getStringAttribute('cloud_storage_password');
  }
  public set cloudStoragePassword(value: string) {
    this._cloudStoragePassword = value;
  }
  public resetCloudStoragePassword() {
    this._cloudStoragePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePasswordInput() {
    return this._cloudStoragePassword;
  }

  // cloud_storage_username - computed: true, optional: true, required: false
  private _cloudStorageUsername?: string; 
  public get cloudStorageUsername() {
    return this.getStringAttribute('cloud_storage_username');
  }
  public set cloudStorageUsername(value: string) {
    this._cloudStorageUsername = value;
  }
  public resetCloudStorageUsername() {
    this._cloudStorageUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageUsernameInput() {
    return this._cloudStorageUsername;
  }

  // use_oauth_for_storage - computed: false, optional: true, required: false
  private _useOauthForStorage?: boolean | cdktf.IResolvable; 
  public get useOauthForStorage() {
    return this.getBooleanAttribute('use_oauth_for_storage');
  }
  public set useOauthForStorage(value: boolean | cdktf.IResolvable) {
    this._useOauthForStorage = value;
  }
  public resetUseOauthForStorage() {
    this._useOauthForStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOauthForStorageInput() {
    return this._useOauthForStorage;
  }
}
export interface JavaServiceInstanceLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnets JavaServiceInstance#subnets}
  */
  readonly subnets?: string[];
}

export function javaServiceInstanceLoadBalancerToTerraform(struct?: JavaServiceInstanceLoadBalancerOutputReference | JavaServiceInstanceLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function javaServiceInstanceLoadBalancerToHclTerraform(struct?: JavaServiceInstanceLoadBalancerOutputReference | JavaServiceInstanceLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancingPolicy = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._subnets = value.subnets;
    }
  }

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // load_balancing_policy - computed: false, optional: true, required: false
  private _loadBalancingPolicy?: string; 
  public get loadBalancingPolicy() {
    return this.getStringAttribute('load_balancing_policy');
  }
  public set loadBalancingPolicy(value: string) {
    this._loadBalancingPolicy = value;
  }
  public resetLoadBalancingPolicy() {
    this._loadBalancingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingPolicyInput() {
    return this._loadBalancingPolicy;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface JavaServiceInstanceOracleTrafficDirectorAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}
  */
  readonly username: string;
}

export function javaServiceInstanceOracleTrafficDirectorAdminToTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorAdminOutputReference | JavaServiceInstanceOracleTrafficDirectorAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function javaServiceInstanceOracleTrafficDirectorAdminToHclTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorAdminOutputReference | JavaServiceInstanceOracleTrafficDirectorAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceOracleTrafficDirectorAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceOracleTrafficDirectorAdmin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceOracleTrafficDirectorAdmin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface JavaServiceInstanceOracleTrafficDirectorListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_port JavaServiceInstance#privileged_port}
  */
  readonly privilegedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}
  */
  readonly privilegedSecuredPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}
  */
  readonly securedPort?: number;
}

export function javaServiceInstanceOracleTrafficDirectorListenerToTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorListenerOutputReference | JavaServiceInstanceOracleTrafficDirectorListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    privileged_port: cdktf.numberToTerraform(struct!.privilegedPort),
    privileged_secured_port: cdktf.numberToTerraform(struct!.privilegedSecuredPort),
    secured_port: cdktf.numberToTerraform(struct!.securedPort),
  }
}


export function javaServiceInstanceOracleTrafficDirectorListenerToHclTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorListenerOutputReference | JavaServiceInstanceOracleTrafficDirectorListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileged_port: {
      value: cdktf.numberToHclTerraform(struct!.privilegedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileged_secured_port: {
      value: cdktf.numberToHclTerraform(struct!.privilegedSecuredPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secured_port: {
      value: cdktf.numberToHclTerraform(struct!.securedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceOracleTrafficDirectorListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceOracleTrafficDirectorListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privilegedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedPort = this._privilegedPort;
    }
    if (this._privilegedSecuredPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedSecuredPort = this._privilegedSecuredPort;
    }
    if (this._securedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.securedPort = this._securedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceOracleTrafficDirectorListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._privilegedPort = undefined;
      this._privilegedSecuredPort = undefined;
      this._securedPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._privilegedPort = value.privilegedPort;
      this._privilegedSecuredPort = value.privilegedSecuredPort;
      this._securedPort = value.securedPort;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // privileged_port - computed: true, optional: true, required: false
  private _privilegedPort?: number; 
  public get privilegedPort() {
    return this.getNumberAttribute('privileged_port');
  }
  public set privilegedPort(value: number) {
    this._privilegedPort = value;
  }
  public resetPrivilegedPort() {
    this._privilegedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedPortInput() {
    return this._privilegedPort;
  }

  // privileged_secured_port - computed: true, optional: true, required: false
  private _privilegedSecuredPort?: number; 
  public get privilegedSecuredPort() {
    return this.getNumberAttribute('privileged_secured_port');
  }
  public set privilegedSecuredPort(value: number) {
    this._privilegedSecuredPort = value;
  }
  public resetPrivilegedSecuredPort() {
    this._privilegedSecuredPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedSecuredPortInput() {
    return this._privilegedSecuredPort;
  }

  // secured_port - computed: true, optional: true, required: false
  private _securedPort?: number; 
  public get securedPort() {
    return this.getNumberAttribute('secured_port');
  }
  public set securedPort(value: number) {
    this._securedPort = value;
  }
  public resetSecuredPort() {
    this._securedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedPortInput() {
    return this._securedPort;
  }
}
export interface JavaServiceInstanceOracleTrafficDirector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#high_availability JavaServiceInstance#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}
  */
  readonly ipReservations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}
  */
  readonly shape: string;
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#admin JavaServiceInstance#admin}
  */
  readonly admin: JavaServiceInstanceOracleTrafficDirectorAdmin;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#listener JavaServiceInstance#listener}
  */
  readonly listener?: JavaServiceInstanceOracleTrafficDirectorListener;
}

export function javaServiceInstanceOracleTrafficDirectorToTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorOutputReference | JavaServiceInstanceOracleTrafficDirector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    ip_reservations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipReservations),
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    shape: cdktf.stringToTerraform(struct!.shape),
    admin: javaServiceInstanceOracleTrafficDirectorAdminToTerraform(struct!.admin),
    listener: javaServiceInstanceOracleTrafficDirectorListenerToTerraform(struct!.listener),
  }
}


export function javaServiceInstanceOracleTrafficDirectorToHclTerraform(struct?: JavaServiceInstanceOracleTrafficDirectorOutputReference | JavaServiceInstanceOracleTrafficDirector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_reservations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipReservations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin: {
      value: javaServiceInstanceOracleTrafficDirectorAdminToHclTerraform(struct!.admin),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceOracleTrafficDirectorAdminList",
    },
    listener: {
      value: javaServiceInstanceOracleTrafficDirectorListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceOracleTrafficDirectorListenerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceOracleTrafficDirectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceOracleTrafficDirector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._ipReservations !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReservations = this._ipReservations;
    }
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceOracleTrafficDirector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highAvailability = undefined;
      this._ipReservations = undefined;
      this._loadBalancingPolicy = undefined;
      this._shape = undefined;
      this._admin.internalValue = undefined;
      this._listener.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highAvailability = value.highAvailability;
      this._ipReservations = value.ipReservations;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._shape = value.shape;
      this._admin.internalValue = value.admin;
      this._listener.internalValue = value.listener;
    }
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // ip_reservations - computed: false, optional: true, required: false
  private _ipReservations?: string[]; 
  public get ipReservations() {
    return this.getListAttribute('ip_reservations');
  }
  public set ipReservations(value: string[]) {
    this._ipReservations = value;
  }
  public resetIpReservations() {
    this._ipReservations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReservationsInput() {
    return this._ipReservations;
  }

  // load_balancing_policy - computed: false, optional: true, required: false
  private _loadBalancingPolicy?: string; 
  public get loadBalancingPolicy() {
    return this.getStringAttribute('load_balancing_policy');
  }
  public set loadBalancingPolicy(value: string) {
    this._loadBalancingPolicy = value;
  }
  public resetLoadBalancingPolicy() {
    this._loadBalancingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingPolicyInput() {
    return this._loadBalancingPolicy;
  }

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // admin - computed: false, optional: false, required: true
  private _admin = new JavaServiceInstanceOracleTrafficDirectorAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: JavaServiceInstanceOracleTrafficDirectorAdmin) {
    this._admin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new JavaServiceInstanceOracleTrafficDirectorListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: JavaServiceInstanceOracleTrafficDirectorListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }
}
export interface JavaServiceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#create JavaServiceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#delete JavaServiceInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#update JavaServiceInstance#update}
  */
  readonly update?: string;
}

export function javaServiceInstanceTimeoutsToTerraform(struct?: JavaServiceInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function javaServiceInstanceTimeoutsToHclTerraform(struct?: JavaServiceInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JavaServiceInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface JavaServiceInstanceWeblogicServerAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}
  */
  readonly securedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}
  */
  readonly username: string;
}

export function javaServiceInstanceWeblogicServerAdminToTerraform(struct?: JavaServiceInstanceWeblogicServerAdminOutputReference | JavaServiceInstanceWeblogicServerAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secured_port: cdktf.numberToTerraform(struct!.securedPort),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function javaServiceInstanceWeblogicServerAdminToHclTerraform(struct?: JavaServiceInstanceWeblogicServerAdminOutputReference | JavaServiceInstanceWeblogicServerAdmin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secured_port: {
      value: cdktf.numberToHclTerraform(struct!.securedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerAdmin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.securedPort = this._securedPort;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerAdmin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._port = undefined;
      this._securedPort = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._port = value.port;
      this._securedPort = value.securedPort;
      this._username = value.username;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secured_port - computed: false, optional: true, required: false
  private _securedPort?: number; 
  public get securedPort() {
    return this.getNumberAttribute('secured_port');
  }
  public set securedPort(value: number) {
    this._securedPort = value;
  }
  public resetSecuredPort() {
    this._securedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedPortInput() {
    return this._securedPort;
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
export interface JavaServiceInstanceWeblogicServerApplicationDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}
  */
  readonly username: string;
}

export function javaServiceInstanceWeblogicServerApplicationDatabaseToTerraform(struct?: JavaServiceInstanceWeblogicServerApplicationDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function javaServiceInstanceWeblogicServerApplicationDatabaseToHclTerraform(struct?: JavaServiceInstanceWeblogicServerApplicationDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_name: {
      value: cdktf.stringToHclTerraform(struct!.pdbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JavaServiceInstanceWeblogicServerApplicationDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerApplicationDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pdbName = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._pdbName = value.pdbName;
      this._username = value.username;
    }
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

  // pdb_name - computed: true, optional: true, required: false
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  public resetPdbName() {
    this._pdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
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

export class JavaServiceInstanceWeblogicServerApplicationDatabaseList extends cdktf.ComplexList {
  public internalValue? : JavaServiceInstanceWeblogicServerApplicationDatabase[] | cdktf.IResolvable

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
  public get(index: number): JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference {
    return new JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JavaServiceInstanceWeblogicServerCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}
  */
  readonly pathPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}
  */
  readonly serverCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}
  */
  readonly serversPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#type JavaServiceInstance#type}
  */
  readonly type: string;
}

export function javaServiceInstanceWeblogicServerClusterToTerraform(struct?: JavaServiceInstanceWeblogicServerCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathPrefixes),
    server_count: cdktf.numberToTerraform(struct!.serverCount),
    servers_per_node: cdktf.numberToTerraform(struct!.serversPerNode),
    shape: cdktf.stringToTerraform(struct!.shape),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function javaServiceInstanceWeblogicServerClusterToHclTerraform(struct?: JavaServiceInstanceWeblogicServerCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    server_count: {
      value: cdktf.numberToHclTerraform(struct!.serverCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers_per_node: {
      value: cdktf.numberToHclTerraform(struct!.serversPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JavaServiceInstanceWeblogicServerCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixes = this._pathPrefixes;
    }
    if (this._serverCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCount = this._serverCount;
    }
    if (this._serversPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversPerNode = this._serversPerNode;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pathPrefixes = undefined;
      this._serverCount = undefined;
      this._serversPerNode = undefined;
      this._shape = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pathPrefixes = value.pathPrefixes;
      this._serverCount = value.serverCount;
      this._serversPerNode = value.serversPerNode;
      this._shape = value.shape;
      this._type = value.type;
    }
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

  // path_prefixes - computed: false, optional: true, required: false
  private _pathPrefixes?: string[]; 
  public get pathPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('path_prefixes'));
  }
  public set pathPrefixes(value: string[]) {
    this._pathPrefixes = value;
  }
  public resetPathPrefixes() {
    this._pathPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixesInput() {
    return this._pathPrefixes;
  }

  // server_count - computed: false, optional: true, required: false
  private _serverCount?: number; 
  public get serverCount() {
    return this.getNumberAttribute('server_count');
  }
  public set serverCount(value: number) {
    this._serverCount = value;
  }
  public resetServerCount() {
    this._serverCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCountInput() {
    return this._serverCount;
  }

  // servers_per_node - computed: false, optional: true, required: false
  private _serversPerNode?: number; 
  public get serversPerNode() {
    return this.getNumberAttribute('servers_per_node');
  }
  public set serversPerNode(value: number) {
    this._serversPerNode = value;
  }
  public resetServersPerNode() {
    this._serversPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversPerNodeInput() {
    return this._serversPerNode;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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
}

export class JavaServiceInstanceWeblogicServerClusterList extends cdktf.ComplexList {
  public internalValue? : JavaServiceInstanceWeblogicServerCluster[] | cdktf.IResolvable

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
  public get(index: number): JavaServiceInstanceWeblogicServerClusterOutputReference {
    return new JavaServiceInstanceWeblogicServerClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JavaServiceInstanceWeblogicServerDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}
  */
  readonly username: string;
}

export function javaServiceInstanceWeblogicServerDatabaseToTerraform(struct?: JavaServiceInstanceWeblogicServerDatabaseOutputReference | JavaServiceInstanceWeblogicServerDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function javaServiceInstanceWeblogicServerDatabaseToHclTerraform(struct?: JavaServiceInstanceWeblogicServerDatabaseOutputReference | JavaServiceInstanceWeblogicServerDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_name: {
      value: cdktf.stringToHclTerraform(struct!.pdbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._password = undefined;
      this._pdbName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._password = value.password;
      this._pdbName = value.pdbName;
      this._username = value.username;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // pdb_name - computed: false, optional: true, required: false
  private _pdbName?: string; 
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
  public set pdbName(value: string) {
    this._pdbName = value;
  }
  public resetPdbName() {
    this._pdbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameInput() {
    return this._pdbName;
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
export interface JavaServiceInstanceWeblogicServerDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#mode JavaServiceInstance#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#partition_count JavaServiceInstance#partition_count}
  */
  readonly partitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#volume_size JavaServiceInstance#volume_size}
  */
  readonly volumeSize?: string;
}

export function javaServiceInstanceWeblogicServerDomainToTerraform(struct?: JavaServiceInstanceWeblogicServerDomainOutputReference | JavaServiceInstanceWeblogicServerDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    partition_count: cdktf.numberToTerraform(struct!.partitionCount),
    volume_size: cdktf.stringToTerraform(struct!.volumeSize),
  }
}


export function javaServiceInstanceWeblogicServerDomainToHclTerraform(struct?: JavaServiceInstanceWeblogicServerDomainOutputReference | JavaServiceInstanceWeblogicServerDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_count: {
      value: cdktf.numberToHclTerraform(struct!.partitionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partitionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionCount = this._partitionCount;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._name = undefined;
      this._partitionCount = undefined;
      this._volumeSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._name = value.name;
      this._partitionCount = value.partitionCount;
      this._volumeSize = value.volumeSize;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition_count - computed: false, optional: true, required: false
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: string; 
  public get volumeSize() {
    return this.getStringAttribute('volume_size');
  }
  public set volumeSize(value: string) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }
}
export interface JavaServiceInstanceWeblogicServerManagedServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}
  */
  readonly initialHeapSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}
  */
  readonly initialPermanentGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#jvm_args JavaServiceInstance#jvm_args}
  */
  readonly jvmArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}
  */
  readonly maxHeapSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}
  */
  readonly maxPermanentGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}
  */
  readonly overwriteJvmArgs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}
  */
  readonly serverCount?: number;
}

export function javaServiceInstanceWeblogicServerManagedServersToTerraform(struct?: JavaServiceInstanceWeblogicServerManagedServersOutputReference | JavaServiceInstanceWeblogicServerManagedServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_heap_size: cdktf.numberToTerraform(struct!.initialHeapSize),
    initial_permanent_generation: cdktf.numberToTerraform(struct!.initialPermanentGeneration),
    jvm_args: cdktf.stringToTerraform(struct!.jvmArgs),
    max_heap_size: cdktf.numberToTerraform(struct!.maxHeapSize),
    max_permanent_generation: cdktf.numberToTerraform(struct!.maxPermanentGeneration),
    overwrite_jvm_args: cdktf.booleanToTerraform(struct!.overwriteJvmArgs),
    server_count: cdktf.numberToTerraform(struct!.serverCount),
  }
}


export function javaServiceInstanceWeblogicServerManagedServersToHclTerraform(struct?: JavaServiceInstanceWeblogicServerManagedServersOutputReference | JavaServiceInstanceWeblogicServerManagedServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_heap_size: {
      value: cdktf.numberToHclTerraform(struct!.initialHeapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_permanent_generation: {
      value: cdktf.numberToHclTerraform(struct!.initialPermanentGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jvm_args: {
      value: cdktf.stringToHclTerraform(struct!.jvmArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_heap_size: {
      value: cdktf.numberToHclTerraform(struct!.maxHeapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_permanent_generation: {
      value: cdktf.numberToHclTerraform(struct!.maxPermanentGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overwrite_jvm_args: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteJvmArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_count: {
      value: cdktf.numberToHclTerraform(struct!.serverCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerManagedServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerManagedServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialHeapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialHeapSize = this._initialHeapSize;
    }
    if (this._initialPermanentGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialPermanentGeneration = this._initialPermanentGeneration;
    }
    if (this._jvmArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmArgs = this._jvmArgs;
    }
    if (this._maxHeapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeapSize = this._maxHeapSize;
    }
    if (this._maxPermanentGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPermanentGeneration = this._maxPermanentGeneration;
    }
    if (this._overwriteJvmArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteJvmArgs = this._overwriteJvmArgs;
    }
    if (this._serverCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCount = this._serverCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerManagedServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initialHeapSize = undefined;
      this._initialPermanentGeneration = undefined;
      this._jvmArgs = undefined;
      this._maxHeapSize = undefined;
      this._maxPermanentGeneration = undefined;
      this._overwriteJvmArgs = undefined;
      this._serverCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initialHeapSize = value.initialHeapSize;
      this._initialPermanentGeneration = value.initialPermanentGeneration;
      this._jvmArgs = value.jvmArgs;
      this._maxHeapSize = value.maxHeapSize;
      this._maxPermanentGeneration = value.maxPermanentGeneration;
      this._overwriteJvmArgs = value.overwriteJvmArgs;
      this._serverCount = value.serverCount;
    }
  }

  // initial_heap_size - computed: false, optional: true, required: false
  private _initialHeapSize?: number; 
  public get initialHeapSize() {
    return this.getNumberAttribute('initial_heap_size');
  }
  public set initialHeapSize(value: number) {
    this._initialHeapSize = value;
  }
  public resetInitialHeapSize() {
    this._initialHeapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHeapSizeInput() {
    return this._initialHeapSize;
  }

  // initial_permanent_generation - computed: false, optional: true, required: false
  private _initialPermanentGeneration?: number; 
  public get initialPermanentGeneration() {
    return this.getNumberAttribute('initial_permanent_generation');
  }
  public set initialPermanentGeneration(value: number) {
    this._initialPermanentGeneration = value;
  }
  public resetInitialPermanentGeneration() {
    this._initialPermanentGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPermanentGenerationInput() {
    return this._initialPermanentGeneration;
  }

  // jvm_args - computed: false, optional: true, required: false
  private _jvmArgs?: string; 
  public get jvmArgs() {
    return this.getStringAttribute('jvm_args');
  }
  public set jvmArgs(value: string) {
    this._jvmArgs = value;
  }
  public resetJvmArgs() {
    this._jvmArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmArgsInput() {
    return this._jvmArgs;
  }

  // max_heap_size - computed: false, optional: true, required: false
  private _maxHeapSize?: number; 
  public get maxHeapSize() {
    return this.getNumberAttribute('max_heap_size');
  }
  public set maxHeapSize(value: number) {
    this._maxHeapSize = value;
  }
  public resetMaxHeapSize() {
    this._maxHeapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapSizeInput() {
    return this._maxHeapSize;
  }

  // max_permanent_generation - computed: false, optional: true, required: false
  private _maxPermanentGeneration?: number; 
  public get maxPermanentGeneration() {
    return this.getNumberAttribute('max_permanent_generation');
  }
  public set maxPermanentGeneration(value: number) {
    this._maxPermanentGeneration = value;
  }
  public resetMaxPermanentGeneration() {
    this._maxPermanentGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPermanentGenerationInput() {
    return this._maxPermanentGeneration;
  }

  // overwrite_jvm_args - computed: false, optional: true, required: false
  private _overwriteJvmArgs?: boolean | cdktf.IResolvable; 
  public get overwriteJvmArgs() {
    return this.getBooleanAttribute('overwrite_jvm_args');
  }
  public set overwriteJvmArgs(value: boolean | cdktf.IResolvable) {
    this._overwriteJvmArgs = value;
  }
  public resetOverwriteJvmArgs() {
    this._overwriteJvmArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteJvmArgsInput() {
    return this._overwriteJvmArgs;
  }

  // server_count - computed: false, optional: true, required: false
  private _serverCount?: number; 
  public get serverCount() {
    return this.getNumberAttribute('server_count');
  }
  public set serverCount(value: number) {
    this._serverCount = value;
  }
  public resetServerCount() {
    this._serverCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCountInput() {
    return this._serverCount;
  }
}
export interface JavaServiceInstanceWeblogicServerNodeManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}
  */
  readonly username?: string;
}

export function javaServiceInstanceWeblogicServerNodeManagerToTerraform(struct?: JavaServiceInstanceWeblogicServerNodeManagerOutputReference | JavaServiceInstanceWeblogicServerNodeManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function javaServiceInstanceWeblogicServerNodeManagerToHclTerraform(struct?: JavaServiceInstanceWeblogicServerNodeManagerOutputReference | JavaServiceInstanceWeblogicServerNodeManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerNodeManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerNodeManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerNodeManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface JavaServiceInstanceWeblogicServerPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#content_port JavaServiceInstance#content_port}
  */
  readonly contentPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}
  */
  readonly deploymentChannelPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}
  */
  readonly privilegedContentPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}
  */
  readonly privilegedSecuredContentPort?: number;
}

export function javaServiceInstanceWeblogicServerPortsToTerraform(struct?: JavaServiceInstanceWeblogicServerPortsOutputReference | JavaServiceInstanceWeblogicServerPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_port: cdktf.numberToTerraform(struct!.contentPort),
    deployment_channel_port: cdktf.numberToTerraform(struct!.deploymentChannelPort),
    privileged_content_port: cdktf.numberToTerraform(struct!.privilegedContentPort),
    privileged_secured_content_port: cdktf.numberToTerraform(struct!.privilegedSecuredContentPort),
  }
}


export function javaServiceInstanceWeblogicServerPortsToHclTerraform(struct?: JavaServiceInstanceWeblogicServerPortsOutputReference | JavaServiceInstanceWeblogicServerPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_port: {
      value: cdktf.numberToHclTerraform(struct!.contentPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deployment_channel_port: {
      value: cdktf.numberToHclTerraform(struct!.deploymentChannelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileged_content_port: {
      value: cdktf.numberToHclTerraform(struct!.privilegedContentPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileged_secured_content_port: {
      value: cdktf.numberToHclTerraform(struct!.privilegedSecuredContentPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServerPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPort = this._contentPort;
    }
    if (this._deploymentChannelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentChannelPort = this._deploymentChannelPort;
    }
    if (this._privilegedContentPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedContentPort = this._privilegedContentPort;
    }
    if (this._privilegedSecuredContentPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedSecuredContentPort = this._privilegedSecuredContentPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServerPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentPort = undefined;
      this._deploymentChannelPort = undefined;
      this._privilegedContentPort = undefined;
      this._privilegedSecuredContentPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentPort = value.contentPort;
      this._deploymentChannelPort = value.deploymentChannelPort;
      this._privilegedContentPort = value.privilegedContentPort;
      this._privilegedSecuredContentPort = value.privilegedSecuredContentPort;
    }
  }

  // content_port - computed: false, optional: true, required: false
  private _contentPort?: number; 
  public get contentPort() {
    return this.getNumberAttribute('content_port');
  }
  public set contentPort(value: number) {
    this._contentPort = value;
  }
  public resetContentPort() {
    this._contentPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPortInput() {
    return this._contentPort;
  }

  // deployment_channel_port - computed: false, optional: true, required: false
  private _deploymentChannelPort?: number; 
  public get deploymentChannelPort() {
    return this.getNumberAttribute('deployment_channel_port');
  }
  public set deploymentChannelPort(value: number) {
    this._deploymentChannelPort = value;
  }
  public resetDeploymentChannelPort() {
    this._deploymentChannelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentChannelPortInput() {
    return this._deploymentChannelPort;
  }

  // privileged_content_port - computed: false, optional: true, required: false
  private _privilegedContentPort?: number; 
  public get privilegedContentPort() {
    return this.getNumberAttribute('privileged_content_port');
  }
  public set privilegedContentPort(value: number) {
    this._privilegedContentPort = value;
  }
  public resetPrivilegedContentPort() {
    this._privilegedContentPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedContentPortInput() {
    return this._privilegedContentPort;
  }

  // privileged_secured_content_port - computed: false, optional: true, required: false
  private _privilegedSecuredContentPort?: number; 
  public get privilegedSecuredContentPort() {
    return this.getNumberAttribute('privileged_secured_content_port');
  }
  public set privilegedSecuredContentPort(value: number) {
    this._privilegedSecuredContentPort = value;
  }
  public resetPrivilegedSecuredContentPort() {
    this._privilegedSecuredContentPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedSecuredContentPortInput() {
    return this._privilegedSecuredContentPort;
  }
}
export interface JavaServiceInstanceWeblogicServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}
  */
  readonly backupVolumeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cluster_name JavaServiceInstance#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#connect_string JavaServiceInstance#connect_string}
  */
  readonly connectString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}
  */
  readonly ipReservations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}
  */
  readonly middlewareVolumeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}
  */
  readonly upperStackProductName?: string;
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#admin JavaServiceInstance#admin}
  */
  readonly admin: JavaServiceInstanceWeblogicServerAdmin;
  /**
  * application_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#application_database JavaServiceInstance#application_database}
  */
  readonly applicationDatabase?: JavaServiceInstanceWeblogicServerApplicationDatabase[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cluster JavaServiceInstance#cluster}
  */
  readonly cluster?: JavaServiceInstanceWeblogicServerCluster[] | cdktf.IResolvable;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#database JavaServiceInstance#database}
  */
  readonly database: JavaServiceInstanceWeblogicServerDatabase;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#domain JavaServiceInstance#domain}
  */
  readonly domain?: JavaServiceInstanceWeblogicServerDomain;
  /**
  * managed_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#managed_servers JavaServiceInstance#managed_servers}
  */
  readonly managedServers?: JavaServiceInstanceWeblogicServerManagedServers;
  /**
  * node_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#node_manager JavaServiceInstance#node_manager}
  */
  readonly nodeManager?: JavaServiceInstanceWeblogicServerNodeManager;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ports JavaServiceInstance#ports}
  */
  readonly ports?: JavaServiceInstanceWeblogicServerPorts;
}

export function javaServiceInstanceWeblogicServerToTerraform(struct?: JavaServiceInstanceWeblogicServerOutputReference | JavaServiceInstanceWeblogicServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_volume_size: cdktf.stringToTerraform(struct!.backupVolumeSize),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    connect_string: cdktf.stringToTerraform(struct!.connectString),
    ip_reservations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipReservations),
    middleware_volume_size: cdktf.stringToTerraform(struct!.middlewareVolumeSize),
    shape: cdktf.stringToTerraform(struct!.shape),
    upper_stack_product_name: cdktf.stringToTerraform(struct!.upperStackProductName),
    admin: javaServiceInstanceWeblogicServerAdminToTerraform(struct!.admin),
    application_database: cdktf.listMapper(javaServiceInstanceWeblogicServerApplicationDatabaseToTerraform, true)(struct!.applicationDatabase),
    cluster: cdktf.listMapper(javaServiceInstanceWeblogicServerClusterToTerraform, true)(struct!.cluster),
    database: javaServiceInstanceWeblogicServerDatabaseToTerraform(struct!.database),
    domain: javaServiceInstanceWeblogicServerDomainToTerraform(struct!.domain),
    managed_servers: javaServiceInstanceWeblogicServerManagedServersToTerraform(struct!.managedServers),
    node_manager: javaServiceInstanceWeblogicServerNodeManagerToTerraform(struct!.nodeManager),
    ports: javaServiceInstanceWeblogicServerPortsToTerraform(struct!.ports),
  }
}


export function javaServiceInstanceWeblogicServerToHclTerraform(struct?: JavaServiceInstanceWeblogicServerOutputReference | JavaServiceInstanceWeblogicServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_volume_size: {
      value: cdktf.stringToHclTerraform(struct!.backupVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_string: {
      value: cdktf.stringToHclTerraform(struct!.connectString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_reservations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipReservations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    middleware_volume_size: {
      value: cdktf.stringToHclTerraform(struct!.middlewareVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upper_stack_product_name: {
      value: cdktf.stringToHclTerraform(struct!.upperStackProductName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin: {
      value: javaServiceInstanceWeblogicServerAdminToHclTerraform(struct!.admin),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerAdminList",
    },
    application_database: {
      value: cdktf.listMapperHcl(javaServiceInstanceWeblogicServerApplicationDatabaseToHclTerraform, true)(struct!.applicationDatabase),
      isBlock: true,
      type: "set",
      storageClassType: "JavaServiceInstanceWeblogicServerApplicationDatabaseList",
    },
    cluster: {
      value: cdktf.listMapperHcl(javaServiceInstanceWeblogicServerClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerClusterList",
    },
    database: {
      value: javaServiceInstanceWeblogicServerDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerDatabaseList",
    },
    domain: {
      value: javaServiceInstanceWeblogicServerDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerDomainList",
    },
    managed_servers: {
      value: javaServiceInstanceWeblogicServerManagedServersToHclTerraform(struct!.managedServers),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerManagedServersList",
    },
    node_manager: {
      value: javaServiceInstanceWeblogicServerNodeManagerToHclTerraform(struct!.nodeManager),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerNodeManagerList",
    },
    ports: {
      value: javaServiceInstanceWeblogicServerPortsToHclTerraform(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "JavaServiceInstanceWeblogicServerPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JavaServiceInstanceWeblogicServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JavaServiceInstanceWeblogicServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupVolumeSize = this._backupVolumeSize;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._connectString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectString = this._connectString;
    }
    if (this._ipReservations !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReservations = this._ipReservations;
    }
    if (this._middlewareVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlewareVolumeSize = this._middlewareVolumeSize;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._upperStackProductName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperStackProductName = this._upperStackProductName;
    }
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._applicationDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationDatabase = this._applicationDatabase?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._managedServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedServers = this._managedServers?.internalValue;
    }
    if (this._nodeManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeManager = this._nodeManager?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JavaServiceInstanceWeblogicServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupVolumeSize = undefined;
      this._clusterName = undefined;
      this._connectString = undefined;
      this._ipReservations = undefined;
      this._middlewareVolumeSize = undefined;
      this._shape = undefined;
      this._upperStackProductName = undefined;
      this._admin.internalValue = undefined;
      this._applicationDatabase.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._database.internalValue = undefined;
      this._domain.internalValue = undefined;
      this._managedServers.internalValue = undefined;
      this._nodeManager.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupVolumeSize = value.backupVolumeSize;
      this._clusterName = value.clusterName;
      this._connectString = value.connectString;
      this._ipReservations = value.ipReservations;
      this._middlewareVolumeSize = value.middlewareVolumeSize;
      this._shape = value.shape;
      this._upperStackProductName = value.upperStackProductName;
      this._admin.internalValue = value.admin;
      this._applicationDatabase.internalValue = value.applicationDatabase;
      this._cluster.internalValue = value.cluster;
      this._database.internalValue = value.database;
      this._domain.internalValue = value.domain;
      this._managedServers.internalValue = value.managedServers;
      this._nodeManager.internalValue = value.nodeManager;
      this._ports.internalValue = value.ports;
    }
  }

  // backup_volume_size - computed: false, optional: true, required: false
  private _backupVolumeSize?: string; 
  public get backupVolumeSize() {
    return this.getStringAttribute('backup_volume_size');
  }
  public set backupVolumeSize(value: string) {
    this._backupVolumeSize = value;
  }
  public resetBackupVolumeSize() {
    this._backupVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVolumeSizeInput() {
    return this._backupVolumeSize;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // connect_string - computed: false, optional: true, required: false
  private _connectString?: string; 
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }
  public set connectString(value: string) {
    this._connectString = value;
  }
  public resetConnectString() {
    this._connectString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectStringInput() {
    return this._connectString;
  }

  // ip_reservations - computed: false, optional: true, required: false
  private _ipReservations?: string[]; 
  public get ipReservations() {
    return this.getListAttribute('ip_reservations');
  }
  public set ipReservations(value: string[]) {
    this._ipReservations = value;
  }
  public resetIpReservations() {
    this._ipReservations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReservationsInput() {
    return this._ipReservations;
  }

  // middleware_volume_size - computed: true, optional: true, required: false
  private _middlewareVolumeSize?: string; 
  public get middlewareVolumeSize() {
    return this.getStringAttribute('middleware_volume_size');
  }
  public set middlewareVolumeSize(value: string) {
    this._middlewareVolumeSize = value;
  }
  public resetMiddlewareVolumeSize() {
    this._middlewareVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewareVolumeSizeInput() {
    return this._middlewareVolumeSize;
  }

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // upper_stack_product_name - computed: false, optional: true, required: false
  private _upperStackProductName?: string; 
  public get upperStackProductName() {
    return this.getStringAttribute('upper_stack_product_name');
  }
  public set upperStackProductName(value: string) {
    this._upperStackProductName = value;
  }
  public resetUpperStackProductName() {
    this._upperStackProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperStackProductNameInput() {
    return this._upperStackProductName;
  }

  // admin - computed: false, optional: false, required: true
  private _admin = new JavaServiceInstanceWeblogicServerAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: JavaServiceInstanceWeblogicServerAdmin) {
    this._admin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // application_database - computed: false, optional: true, required: false
  private _applicationDatabase = new JavaServiceInstanceWeblogicServerApplicationDatabaseList(this, "application_database", true);
  public get applicationDatabase() {
    return this._applicationDatabase;
  }
  public putApplicationDatabase(value: JavaServiceInstanceWeblogicServerApplicationDatabase[] | cdktf.IResolvable) {
    this._applicationDatabase.internalValue = value;
  }
  public resetApplicationDatabase() {
    this._applicationDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDatabaseInput() {
    return this._applicationDatabase.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new JavaServiceInstanceWeblogicServerClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: JavaServiceInstanceWeblogicServerCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // database - computed: false, optional: false, required: true
  private _database = new JavaServiceInstanceWeblogicServerDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: JavaServiceInstanceWeblogicServerDatabase) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new JavaServiceInstanceWeblogicServerDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: JavaServiceInstanceWeblogicServerDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // managed_servers - computed: false, optional: true, required: false
  private _managedServers = new JavaServiceInstanceWeblogicServerManagedServersOutputReference(this, "managed_servers");
  public get managedServers() {
    return this._managedServers;
  }
  public putManagedServers(value: JavaServiceInstanceWeblogicServerManagedServers) {
    this._managedServers.internalValue = value;
  }
  public resetManagedServers() {
    this._managedServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServersInput() {
    return this._managedServers.internalValue;
  }

  // node_manager - computed: false, optional: true, required: false
  private _nodeManager = new JavaServiceInstanceWeblogicServerNodeManagerOutputReference(this, "node_manager");
  public get nodeManager() {
    return this._nodeManager;
  }
  public putNodeManager(value: JavaServiceInstanceWeblogicServerNodeManager) {
    this._nodeManager.internalValue = value;
  }
  public resetNodeManager() {
    this._nodeManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeManagerInput() {
    return this._nodeManager.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new JavaServiceInstanceWeblogicServerPortsOutputReference(this, "ports");
  public get ports() {
    return this._ports;
  }
  public putPorts(value: JavaServiceInstanceWeblogicServerPorts) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance oraclepaas_java_service_instance}
*/
export class JavaServiceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas_java_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JavaServiceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JavaServiceInstance to import
  * @param importFromId The id of the existing JavaServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JavaServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oraclepaas_java_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance oraclepaas_java_service_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JavaServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: JavaServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas_java_service_instance',
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
    this._assignPublicIp = config.assignPublicIp;
    this._availabilityDomain = config.availabilityDomain;
    this._backupDestination = config.backupDestination;
    this._bringYourOwnLicense = config.bringYourOwnLicense;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._edition = config.edition;
    this._enableAdminConsole = config.enableAdminConsole;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._ipNetwork = config.ipNetwork;
    this._level = config.level;
    this._meteringFrequency = config.meteringFrequency;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._region = config.region;
    this._serviceVersion = config.serviceVersion;
    this._snapshotName = config.snapshotName;
    this._sourceServiceName = config.sourceServiceName;
    this._sshPublicKey = config.sshPublicKey;
    this._subnet = config.subnet;
    this._useIdentityService = config.useIdentityService;
    this._backups.internalValue = config.backups;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._oracleTrafficDirector.internalValue = config.oracleTrafficDirector;
    this._timeouts.internalValue = config.timeouts;
    this._weblogicServer.internalValue = config.weblogicServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_destination - computed: false, optional: true, required: false
  private _backupDestination?: string; 
  public get backupDestination() {
    return this.getStringAttribute('backup_destination');
  }
  public set backupDestination(value: string) {
    this._backupDestination = value;
  }
  public resetBackupDestination() {
    this._backupDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationInput() {
    return this._backupDestination;
  }

  // bring_your_own_license - computed: false, optional: true, required: false
  private _bringYourOwnLicense?: boolean | cdktf.IResolvable; 
  public get bringYourOwnLicense() {
    return this.getBooleanAttribute('bring_your_own_license');
  }
  public set bringYourOwnLicense(value: boolean | cdktf.IResolvable) {
    this._bringYourOwnLicense = value;
  }
  public resetBringYourOwnLicense() {
    this._bringYourOwnLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bringYourOwnLicenseInput() {
    return this._bringYourOwnLicense;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // enable_admin_console - computed: false, optional: true, required: false
  private _enableAdminConsole?: boolean | cdktf.IResolvable; 
  public get enableAdminConsole() {
    return this.getBooleanAttribute('enable_admin_console');
  }
  public set enableAdminConsole(value: boolean | cdktf.IResolvable) {
    this._enableAdminConsole = value;
  }
  public resetEnableAdminConsole() {
    this._enableAdminConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminConsoleInput() {
    return this._enableAdminConsole;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // ip_network - computed: false, optional: true, required: false
  private _ipNetwork?: string; 
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }
  public set ipNetwork(value: string) {
    this._ipNetwork = value;
  }
  public resetIpNetwork() {
    this._ipNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metering_frequency - computed: false, optional: true, required: false
  private _meteringFrequency?: string; 
  public get meteringFrequency() {
    return this.getStringAttribute('metering_frequency');
  }
  public set meteringFrequency(value: string) {
    this._meteringFrequency = value;
  }
  public resetMeteringFrequency() {
    this._meteringFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meteringFrequencyInput() {
    return this._meteringFrequency;
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

  // region - computed: true, optional: true, required: false
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

  // service_version - computed: false, optional: true, required: false
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  public resetServiceVersion() {
    this._serviceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // source_service_name - computed: false, optional: true, required: false
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  public resetSourceServiceName() {
    this._sourceServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // use_identity_service - computed: false, optional: true, required: false
  private _useIdentityService?: boolean | cdktf.IResolvable; 
  public get useIdentityService() {
    return this.getBooleanAttribute('use_identity_service');
  }
  public set useIdentityService(value: boolean | cdktf.IResolvable) {
    this._useIdentityService = value;
  }
  public resetUseIdentityService() {
    this._useIdentityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIdentityServiceInput() {
    return this._useIdentityService;
  }

  // backups - computed: false, optional: false, required: true
  private _backups = new JavaServiceInstanceBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: JavaServiceInstanceBackups) {
    this._backups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new JavaServiceInstanceLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: JavaServiceInstanceLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // oracle_traffic_director - computed: false, optional: true, required: false
  private _oracleTrafficDirector = new JavaServiceInstanceOracleTrafficDirectorOutputReference(this, "oracle_traffic_director");
  public get oracleTrafficDirector() {
    return this._oracleTrafficDirector;
  }
  public putOracleTrafficDirector(value: JavaServiceInstanceOracleTrafficDirector) {
    this._oracleTrafficDirector.internalValue = value;
  }
  public resetOracleTrafficDirector() {
    this._oracleTrafficDirector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTrafficDirectorInput() {
    return this._oracleTrafficDirector.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JavaServiceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JavaServiceInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // weblogic_server - computed: false, optional: false, required: true
  private _weblogicServer = new JavaServiceInstanceWeblogicServerOutputReference(this, "weblogic_server");
  public get weblogicServer() {
    return this._weblogicServer;
  }
  public putWeblogicServer(value: JavaServiceInstanceWeblogicServer) {
    this._weblogicServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weblogicServerInput() {
    return this._weblogicServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_public_ip: cdktf.booleanToTerraform(this._assignPublicIp),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_destination: cdktf.stringToTerraform(this._backupDestination),
      bring_your_own_license: cdktf.booleanToTerraform(this._bringYourOwnLicense),
      description: cdktf.stringToTerraform(this._description),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      edition: cdktf.stringToTerraform(this._edition),
      enable_admin_console: cdktf.booleanToTerraform(this._enableAdminConsole),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      ip_network: cdktf.stringToTerraform(this._ipNetwork),
      level: cdktf.stringToTerraform(this._level),
      metering_frequency: cdktf.stringToTerraform(this._meteringFrequency),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      region: cdktf.stringToTerraform(this._region),
      service_version: cdktf.stringToTerraform(this._serviceVersion),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      source_service_name: cdktf.stringToTerraform(this._sourceServiceName),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnet: cdktf.stringToTerraform(this._subnet),
      use_identity_service: cdktf.booleanToTerraform(this._useIdentityService),
      backups: javaServiceInstanceBackupsToTerraform(this._backups.internalValue),
      load_balancer: javaServiceInstanceLoadBalancerToTerraform(this._loadBalancer.internalValue),
      oracle_traffic_director: javaServiceInstanceOracleTrafficDirectorToTerraform(this._oracleTrafficDirector.internalValue),
      timeouts: javaServiceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      weblogic_server: javaServiceInstanceWeblogicServerToTerraform(this._weblogicServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_public_ip: {
        value: cdktf.booleanToHclTerraform(this._assignPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_destination: {
        value: cdktf.stringToHclTerraform(this._backupDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bring_your_own_license: {
        value: cdktf.booleanToHclTerraform(this._bringYourOwnLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_admin_console: {
        value: cdktf.booleanToHclTerraform(this._enableAdminConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_network: {
        value: cdktf.stringToHclTerraform(this._ipNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metering_frequency: {
        value: cdktf.stringToHclTerraform(this._meteringFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_email: {
        value: cdktf.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_version: {
        value: cdktf.stringToHclTerraform(this._serviceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_name: {
        value: cdktf.stringToHclTerraform(this._sourceServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_identity_service: {
        value: cdktf.booleanToHclTerraform(this._useIdentityService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backups: {
        value: javaServiceInstanceBackupsToHclTerraform(this._backups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JavaServiceInstanceBackupsList",
      },
      load_balancer: {
        value: javaServiceInstanceLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JavaServiceInstanceLoadBalancerList",
      },
      oracle_traffic_director: {
        value: javaServiceInstanceOracleTrafficDirectorToHclTerraform(this._oracleTrafficDirector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JavaServiceInstanceOracleTrafficDirectorList",
      },
      timeouts: {
        value: javaServiceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JavaServiceInstanceTimeouts",
      },
      weblogic_server: {
        value: javaServiceInstanceWeblogicServerToHclTerraform(this._weblogicServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JavaServiceInstanceWeblogicServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
