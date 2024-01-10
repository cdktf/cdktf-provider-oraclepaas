// https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}
  */
  readonly bringYourOwnLicense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}
  */
  readonly edition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}
  */
  readonly highPerformanceStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}
  */
  readonly ipNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}
  */
  readonly ipReservations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}
  */
  readonly subscriptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}
  */
  readonly version: string;
  /**
  * backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}
  */
  readonly backups?: DatabaseServiceInstanceBackups;
  /**
  * database_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}
  */
  readonly databaseConfiguration: DatabaseServiceInstanceDatabaseConfiguration;
  /**
  * default_access_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}
  */
  readonly defaultAccessRules?: DatabaseServiceInstanceDefaultAccessRules;
  /**
  * hybrid_disaster_recovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}
  */
  readonly hybridDisasterRecovery?: DatabaseServiceInstanceHybridDisasterRecovery;
  /**
  * instantiate_from_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}
  */
  readonly instantiateFromBackup?: DatabaseServiceInstanceInstantiateFromBackup;
  /**
  * standby block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}
  */
  readonly standby?: DatabaseServiceInstanceStandby;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timeouts DatabaseServiceInstance#timeouts}
  */
  readonly timeouts?: DatabaseServiceInstanceTimeouts;
}
export interface DatabaseServiceInstanceBackups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}
  */
  readonly cloudStorageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}
  */
  readonly cloudStoragePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}
  */
  readonly cloudStorageUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}
  */
  readonly createIfMissing?: boolean | cdktf.IResolvable;
}

export function databaseServiceInstanceBackupsToTerraform(struct?: DatabaseServiceInstanceBackupsOutputReference | DatabaseServiceInstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_container: cdktf.stringToTerraform(struct!.cloudStorageContainer),
    cloud_storage_password: cdktf.stringToTerraform(struct!.cloudStoragePassword),
    cloud_storage_username: cdktf.stringToTerraform(struct!.cloudStorageUsername),
    create_if_missing: cdktf.booleanToTerraform(struct!.createIfMissing),
  }
}


export function databaseServiceInstanceBackupsToHclTerraform(struct?: DatabaseServiceInstanceBackupsOutputReference | DatabaseServiceInstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    create_if_missing: {
      value: cdktf.booleanToHclTerraform(struct!.createIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._createIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIfMissing = this._createIfMissing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageContainer = undefined;
      this._cloudStoragePassword = undefined;
      this._cloudStorageUsername = undefined;
      this._createIfMissing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageContainer = value.cloudStorageContainer;
      this._cloudStoragePassword = value.cloudStoragePassword;
      this._cloudStorageUsername = value.cloudStorageUsername;
      this._createIfMissing = value.createIfMissing;
    }
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

  // create_if_missing - computed: false, optional: true, required: false
  private _createIfMissing?: boolean | cdktf.IResolvable; 
  public get createIfMissing() {
    return this.getBooleanAttribute('create_if_missing');
  }
  public set createIfMissing(value: boolean | cdktf.IResolvable) {
    this._createIfMissing = value;
  }
  public resetCreateIfMissing() {
    this._createIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIfMissingInput() {
    return this._createIfMissing;
  }
}
export interface DatabaseServiceInstanceDatabaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}
  */
  readonly backupDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}
  */
  readonly backupStorageVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}
  */
  readonly dataStorageVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}
  */
  readonly dbDemo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}
  */
  readonly disasterRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}
  */
  readonly failoverDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}
  */
  readonly goldenGate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}
  */
  readonly isRac?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}
  */
  readonly nationalCharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}
  */
  readonly pdbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}
  */
  readonly sid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}
  */
  readonly sourceServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}
  */
  readonly usableStorage: number;
}

export function databaseServiceInstanceDatabaseConfigurationToTerraform(struct?: DatabaseServiceInstanceDatabaseConfigurationOutputReference | DatabaseServiceInstanceDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    backup_destination: cdktf.stringToTerraform(struct!.backupDestination),
    backup_storage_volume_size: cdktf.numberToTerraform(struct!.backupStorageVolumeSize),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    data_storage_volume_size: cdktf.numberToTerraform(struct!.dataStorageVolumeSize),
    db_demo: cdktf.stringToTerraform(struct!.dbDemo),
    disaster_recovery: cdktf.booleanToTerraform(struct!.disasterRecovery),
    failover_database: cdktf.booleanToTerraform(struct!.failoverDatabase),
    golden_gate: cdktf.booleanToTerraform(struct!.goldenGate),
    is_rac: cdktf.booleanToTerraform(struct!.isRac),
    national_character_set: cdktf.stringToTerraform(struct!.nationalCharacterSet),
    pdb_name: cdktf.stringToTerraform(struct!.pdbName),
    sid: cdktf.stringToTerraform(struct!.sid),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    usable_storage: cdktf.numberToTerraform(struct!.usableStorage),
  }
}


export function databaseServiceInstanceDatabaseConfigurationToHclTerraform(struct?: DatabaseServiceInstanceDatabaseConfigurationOutputReference | DatabaseServiceInstanceDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_destination: {
      value: cdktf.stringToHclTerraform(struct!.backupDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_storage_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.backupStorageVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_storage_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_demo: {
      value: cdktf.stringToHclTerraform(struct!.dbDemo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disaster_recovery: {
      value: cdktf.booleanToHclTerraform(struct!.disasterRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover_database: {
      value: cdktf.booleanToHclTerraform(struct!.failoverDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    golden_gate: {
      value: cdktf.booleanToHclTerraform(struct!.goldenGate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_rac: {
      value: cdktf.booleanToHclTerraform(struct!.isRac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    national_character_set: {
      value: cdktf.stringToHclTerraform(struct!.nationalCharacterSet),
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
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    usable_storage: {
      value: cdktf.numberToHclTerraform(struct!.usableStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceDatabaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._backupDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestination = this._backupDestination;
    }
    if (this._backupStorageVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageVolumeSize = this._backupStorageVolumeSize;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._dataStorageVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageVolumeSize = this._dataStorageVolumeSize;
    }
    if (this._dbDemo !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbDemo = this._dbDemo;
    }
    if (this._disasterRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecovery = this._disasterRecovery;
    }
    if (this._failoverDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverDatabase = this._failoverDatabase;
    }
    if (this._goldenGate !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldenGate = this._goldenGate;
    }
    if (this._isRac !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRac = this._isRac;
    }
    if (this._nationalCharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nationalCharacterSet = this._nationalCharacterSet;
    }
    if (this._pdbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbName = this._pdbName;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usableStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableStorage = this._usableStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceDatabaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._backupDestination = undefined;
      this._backupStorageVolumeSize = undefined;
      this._characterSet = undefined;
      this._dataStorageVolumeSize = undefined;
      this._dbDemo = undefined;
      this._disasterRecovery = undefined;
      this._failoverDatabase = undefined;
      this._goldenGate = undefined;
      this._isRac = undefined;
      this._nationalCharacterSet = undefined;
      this._pdbName = undefined;
      this._sid = undefined;
      this._snapshotName = undefined;
      this._sourceServiceName = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._usableStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._backupDestination = value.backupDestination;
      this._backupStorageVolumeSize = value.backupStorageVolumeSize;
      this._characterSet = value.characterSet;
      this._dataStorageVolumeSize = value.dataStorageVolumeSize;
      this._dbDemo = value.dbDemo;
      this._disasterRecovery = value.disasterRecovery;
      this._failoverDatabase = value.failoverDatabase;
      this._goldenGate = value.goldenGate;
      this._isRac = value.isRac;
      this._nationalCharacterSet = value.nationalCharacterSet;
      this._pdbName = value.pdbName;
      this._sid = value.sid;
      this._snapshotName = value.snapshotName;
      this._sourceServiceName = value.sourceServiceName;
      this._timezone = value.timezone;
      this._type = value.type;
      this._usableStorage = value.usableStorage;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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

  // backup_storage_volume_size - computed: false, optional: true, required: false
  private _backupStorageVolumeSize?: number; 
  public get backupStorageVolumeSize() {
    return this.getNumberAttribute('backup_storage_volume_size');
  }
  public set backupStorageVolumeSize(value: number) {
    this._backupStorageVolumeSize = value;
  }
  public resetBackupStorageVolumeSize() {
    this._backupStorageVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageVolumeSizeInput() {
    return this._backupStorageVolumeSize;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // data_storage_volume_size - computed: false, optional: true, required: false
  private _dataStorageVolumeSize?: number; 
  public get dataStorageVolumeSize() {
    return this.getNumberAttribute('data_storage_volume_size');
  }
  public set dataStorageVolumeSize(value: number) {
    this._dataStorageVolumeSize = value;
  }
  public resetDataStorageVolumeSize() {
    this._dataStorageVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageVolumeSizeInput() {
    return this._dataStorageVolumeSize;
  }

  // db_demo - computed: false, optional: true, required: false
  private _dbDemo?: string; 
  public get dbDemo() {
    return this.getStringAttribute('db_demo');
  }
  public set dbDemo(value: string) {
    this._dbDemo = value;
  }
  public resetDbDemo() {
    this._dbDemo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDemoInput() {
    return this._dbDemo;
  }

  // disaster_recovery - computed: false, optional: true, required: false
  private _disasterRecovery?: boolean | cdktf.IResolvable; 
  public get disasterRecovery() {
    return this.getBooleanAttribute('disaster_recovery');
  }
  public set disasterRecovery(value: boolean | cdktf.IResolvable) {
    this._disasterRecovery = value;
  }
  public resetDisasterRecovery() {
    this._disasterRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryInput() {
    return this._disasterRecovery;
  }

  // failover_database - computed: false, optional: true, required: false
  private _failoverDatabase?: boolean | cdktf.IResolvable; 
  public get failoverDatabase() {
    return this.getBooleanAttribute('failover_database');
  }
  public set failoverDatabase(value: boolean | cdktf.IResolvable) {
    this._failoverDatabase = value;
  }
  public resetFailoverDatabase() {
    this._failoverDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDatabaseInput() {
    return this._failoverDatabase;
  }

  // golden_gate - computed: false, optional: true, required: false
  private _goldenGate?: boolean | cdktf.IResolvable; 
  public get goldenGate() {
    return this.getBooleanAttribute('golden_gate');
  }
  public set goldenGate(value: boolean | cdktf.IResolvable) {
    this._goldenGate = value;
  }
  public resetGoldenGate() {
    this._goldenGate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenGateInput() {
    return this._goldenGate;
  }

  // is_rac - computed: false, optional: true, required: false
  private _isRac?: boolean | cdktf.IResolvable; 
  public get isRac() {
    return this.getBooleanAttribute('is_rac');
  }
  public set isRac(value: boolean | cdktf.IResolvable) {
    this._isRac = value;
  }
  public resetIsRac() {
    this._isRac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRacInput() {
    return this._isRac;
  }

  // national_character_set - computed: true, optional: true, required: false
  private _nationalCharacterSet?: string; 
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }
  public set nationalCharacterSet(value: string) {
    this._nationalCharacterSet = value;
  }
  public resetNationalCharacterSet() {
    this._nationalCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nationalCharacterSetInput() {
    return this._nationalCharacterSet;
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

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // usable_storage - computed: false, optional: false, required: true
  private _usableStorage?: number; 
  public get usableStorage() {
    return this.getNumberAttribute('usable_storage');
  }
  public set usableStorage(value: number) {
    this._usableStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usableStorageInput() {
    return this._usableStorage;
  }
}
export interface DatabaseServiceInstanceDefaultAccessRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}
  */
  readonly enableDbConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}
  */
  readonly enableDbExpress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}
  */
  readonly enableDbListener?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}
  */
  readonly enableEmConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}
  */
  readonly enableHttp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}
  */
  readonly enableHttpSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}
  */
  readonly enableRacDbListener?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}
  */
  readonly enableRacOns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}
  */
  readonly enableScanListener?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
}

export function databaseServiceInstanceDefaultAccessRulesToTerraform(struct?: DatabaseServiceInstanceDefaultAccessRulesOutputReference | DatabaseServiceInstanceDefaultAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_db_console: cdktf.booleanToTerraform(struct!.enableDbConsole),
    enable_db_express: cdktf.booleanToTerraform(struct!.enableDbExpress),
    enable_db_listener: cdktf.booleanToTerraform(struct!.enableDbListener),
    enable_em_console: cdktf.booleanToTerraform(struct!.enableEmConsole),
    enable_http: cdktf.booleanToTerraform(struct!.enableHttp),
    enable_http_ssl: cdktf.booleanToTerraform(struct!.enableHttpSsl),
    enable_rac_db_listener: cdktf.booleanToTerraform(struct!.enableRacDbListener),
    enable_rac_ons: cdktf.booleanToTerraform(struct!.enableRacOns),
    enable_scan_listener: cdktf.booleanToTerraform(struct!.enableScanListener),
    enable_ssh: cdktf.booleanToTerraform(struct!.enableSsh),
  }
}


export function databaseServiceInstanceDefaultAccessRulesToHclTerraform(struct?: DatabaseServiceInstanceDefaultAccessRulesOutputReference | DatabaseServiceInstanceDefaultAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_db_console: {
      value: cdktf.booleanToHclTerraform(struct!.enableDbConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_db_express: {
      value: cdktf.booleanToHclTerraform(struct!.enableDbExpress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_db_listener: {
      value: cdktf.booleanToHclTerraform(struct!.enableDbListener),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_em_console: {
      value: cdktf.booleanToHclTerraform(struct!.enableEmConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttpSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rac_db_listener: {
      value: cdktf.booleanToHclTerraform(struct!.enableRacDbListener),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rac_ons: {
      value: cdktf.booleanToHclTerraform(struct!.enableRacOns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_scan_listener: {
      value: cdktf.booleanToHclTerraform(struct!.enableScanListener),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceDefaultAccessRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceDefaultAccessRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDbConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDbConsole = this._enableDbConsole;
    }
    if (this._enableDbExpress !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDbExpress = this._enableDbExpress;
    }
    if (this._enableDbListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDbListener = this._enableDbListener;
    }
    if (this._enableEmConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEmConsole = this._enableEmConsole;
    }
    if (this._enableHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp = this._enableHttp;
    }
    if (this._enableHttpSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpSsl = this._enableHttpSsl;
    }
    if (this._enableRacDbListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRacDbListener = this._enableRacDbListener;
    }
    if (this._enableRacOns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRacOns = this._enableRacOns;
    }
    if (this._enableScanListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScanListener = this._enableScanListener;
    }
    if (this._enableSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsh = this._enableSsh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceDefaultAccessRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDbConsole = undefined;
      this._enableDbExpress = undefined;
      this._enableDbListener = undefined;
      this._enableEmConsole = undefined;
      this._enableHttp = undefined;
      this._enableHttpSsl = undefined;
      this._enableRacDbListener = undefined;
      this._enableRacOns = undefined;
      this._enableScanListener = undefined;
      this._enableSsh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDbConsole = value.enableDbConsole;
      this._enableDbExpress = value.enableDbExpress;
      this._enableDbListener = value.enableDbListener;
      this._enableEmConsole = value.enableEmConsole;
      this._enableHttp = value.enableHttp;
      this._enableHttpSsl = value.enableHttpSsl;
      this._enableRacDbListener = value.enableRacDbListener;
      this._enableRacOns = value.enableRacOns;
      this._enableScanListener = value.enableScanListener;
      this._enableSsh = value.enableSsh;
    }
  }

  // enable_db_console - computed: true, optional: true, required: false
  private _enableDbConsole?: boolean | cdktf.IResolvable; 
  public get enableDbConsole() {
    return this.getBooleanAttribute('enable_db_console');
  }
  public set enableDbConsole(value: boolean | cdktf.IResolvable) {
    this._enableDbConsole = value;
  }
  public resetEnableDbConsole() {
    this._enableDbConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDbConsoleInput() {
    return this._enableDbConsole;
  }

  // enable_db_express - computed: true, optional: true, required: false
  private _enableDbExpress?: boolean | cdktf.IResolvable; 
  public get enableDbExpress() {
    return this.getBooleanAttribute('enable_db_express');
  }
  public set enableDbExpress(value: boolean | cdktf.IResolvable) {
    this._enableDbExpress = value;
  }
  public resetEnableDbExpress() {
    this._enableDbExpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDbExpressInput() {
    return this._enableDbExpress;
  }

  // enable_db_listener - computed: true, optional: true, required: false
  private _enableDbListener?: boolean | cdktf.IResolvable; 
  public get enableDbListener() {
    return this.getBooleanAttribute('enable_db_listener');
  }
  public set enableDbListener(value: boolean | cdktf.IResolvable) {
    this._enableDbListener = value;
  }
  public resetEnableDbListener() {
    this._enableDbListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDbListenerInput() {
    return this._enableDbListener;
  }

  // enable_em_console - computed: true, optional: true, required: false
  private _enableEmConsole?: boolean | cdktf.IResolvable; 
  public get enableEmConsole() {
    return this.getBooleanAttribute('enable_em_console');
  }
  public set enableEmConsole(value: boolean | cdktf.IResolvable) {
    this._enableEmConsole = value;
  }
  public resetEnableEmConsole() {
    this._enableEmConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmConsoleInput() {
    return this._enableEmConsole;
  }

  // enable_http - computed: true, optional: true, required: false
  private _enableHttp?: boolean | cdktf.IResolvable; 
  public get enableHttp() {
    return this.getBooleanAttribute('enable_http');
  }
  public set enableHttp(value: boolean | cdktf.IResolvable) {
    this._enableHttp = value;
  }
  public resetEnableHttp() {
    this._enableHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpInput() {
    return this._enableHttp;
  }

  // enable_http_ssl - computed: true, optional: true, required: false
  private _enableHttpSsl?: boolean | cdktf.IResolvable; 
  public get enableHttpSsl() {
    return this.getBooleanAttribute('enable_http_ssl');
  }
  public set enableHttpSsl(value: boolean | cdktf.IResolvable) {
    this._enableHttpSsl = value;
  }
  public resetEnableHttpSsl() {
    this._enableHttpSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpSslInput() {
    return this._enableHttpSsl;
  }

  // enable_rac_db_listener - computed: true, optional: true, required: false
  private _enableRacDbListener?: boolean | cdktf.IResolvable; 
  public get enableRacDbListener() {
    return this.getBooleanAttribute('enable_rac_db_listener');
  }
  public set enableRacDbListener(value: boolean | cdktf.IResolvable) {
    this._enableRacDbListener = value;
  }
  public resetEnableRacDbListener() {
    this._enableRacDbListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRacDbListenerInput() {
    return this._enableRacDbListener;
  }

  // enable_rac_ons - computed: true, optional: true, required: false
  private _enableRacOns?: boolean | cdktf.IResolvable; 
  public get enableRacOns() {
    return this.getBooleanAttribute('enable_rac_ons');
  }
  public set enableRacOns(value: boolean | cdktf.IResolvable) {
    this._enableRacOns = value;
  }
  public resetEnableRacOns() {
    this._enableRacOns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRacOnsInput() {
    return this._enableRacOns;
  }

  // enable_scan_listener - computed: true, optional: true, required: false
  private _enableScanListener?: boolean | cdktf.IResolvable; 
  public get enableScanListener() {
    return this.getBooleanAttribute('enable_scan_listener');
  }
  public set enableScanListener(value: boolean | cdktf.IResolvable) {
    this._enableScanListener = value;
  }
  public resetEnableScanListener() {
    this._enableScanListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScanListenerInput() {
    return this._enableScanListener;
  }

  // enable_ssh - computed: true, optional: true, required: false
  private _enableSsh?: boolean | cdktf.IResolvable; 
  public get enableSsh() {
    return this.getBooleanAttribute('enable_ssh');
  }
  public set enableSsh(value: boolean | cdktf.IResolvable) {
    this._enableSsh = value;
  }
  public resetEnableSsh() {
    this._enableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSshInput() {
    return this._enableSsh;
  }
}
export interface DatabaseServiceInstanceHybridDisasterRecovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}
  */
  readonly cloudStorageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}
  */
  readonly cloudStoragePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}
  */
  readonly cloudStorageUsername?: string;
}

export function databaseServiceInstanceHybridDisasterRecoveryToTerraform(struct?: DatabaseServiceInstanceHybridDisasterRecoveryOutputReference | DatabaseServiceInstanceHybridDisasterRecovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_container: cdktf.stringToTerraform(struct!.cloudStorageContainer),
    cloud_storage_password: cdktf.stringToTerraform(struct!.cloudStoragePassword),
    cloud_storage_username: cdktf.stringToTerraform(struct!.cloudStorageUsername),
  }
}


export function databaseServiceInstanceHybridDisasterRecoveryToHclTerraform(struct?: DatabaseServiceInstanceHybridDisasterRecoveryOutputReference | DatabaseServiceInstanceHybridDisasterRecovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceHybridDisasterRecoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceHybridDisasterRecovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceHybridDisasterRecovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageContainer = undefined;
      this._cloudStoragePassword = undefined;
      this._cloudStorageUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageContainer = value.cloudStorageContainer;
      this._cloudStoragePassword = value.cloudStoragePassword;
      this._cloudStorageUsername = value.cloudStorageUsername;
    }
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

  // cloud_storage_password - computed: false, optional: true, required: false
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

  // cloud_storage_username - computed: false, optional: true, required: false
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
}
export interface DatabaseServiceInstanceInstantiateFromBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}
  */
  readonly cloudStorageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}
  */
  readonly cloudStoragePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}
  */
  readonly cloudStorageUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}
  */
  readonly decryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}
  */
  readonly onPremise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}
  */
  readonly walletFileContent?: string;
}

export function databaseServiceInstanceInstantiateFromBackupToTerraform(struct?: DatabaseServiceInstanceInstantiateFromBackupOutputReference | DatabaseServiceInstanceInstantiateFromBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_container: cdktf.stringToTerraform(struct!.cloudStorageContainer),
    cloud_storage_password: cdktf.stringToTerraform(struct!.cloudStoragePassword),
    cloud_storage_username: cdktf.stringToTerraform(struct!.cloudStorageUsername),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    decryption_key: cdktf.stringToTerraform(struct!.decryptionKey),
    on_premise: cdktf.booleanToTerraform(struct!.onPremise),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    wallet_file_content: cdktf.stringToTerraform(struct!.walletFileContent),
  }
}


export function databaseServiceInstanceInstantiateFromBackupToHclTerraform(struct?: DatabaseServiceInstanceInstantiateFromBackupOutputReference | DatabaseServiceInstanceInstantiateFromBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_key: {
      value: cdktf.stringToHclTerraform(struct!.decryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: cdktf.booleanToHclTerraform(struct!.onPremise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_file_content: {
      value: cdktf.stringToHclTerraform(struct!.walletFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceInstantiateFromBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceInstantiateFromBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._decryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionKey = this._decryptionKey;
    }
    if (this._onPremise !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._walletFileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletFileContent = this._walletFileContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceInstantiateFromBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageContainer = undefined;
      this._cloudStoragePassword = undefined;
      this._cloudStorageUsername = undefined;
      this._databaseId = undefined;
      this._decryptionKey = undefined;
      this._onPremise = undefined;
      this._serviceId = undefined;
      this._walletFileContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageContainer = value.cloudStorageContainer;
      this._cloudStoragePassword = value.cloudStoragePassword;
      this._cloudStorageUsername = value.cloudStorageUsername;
      this._databaseId = value.databaseId;
      this._decryptionKey = value.decryptionKey;
      this._onPremise = value.onPremise;
      this._serviceId = value.serviceId;
      this._walletFileContent = value.walletFileContent;
    }
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

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // decryption_key - computed: false, optional: true, required: false
  private _decryptionKey?: string; 
  public get decryptionKey() {
    return this.getStringAttribute('decryption_key');
  }
  public set decryptionKey(value: string) {
    this._decryptionKey = value;
  }
  public resetDecryptionKey() {
    this._decryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionKeyInput() {
    return this._decryptionKey;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise?: boolean | cdktf.IResolvable; 
  public get onPremise() {
    return this.getBooleanAttribute('on_premise');
  }
  public set onPremise(value: boolean | cdktf.IResolvable) {
    this._onPremise = value;
  }
  public resetOnPremise() {
    this._onPremise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // wallet_file_content - computed: false, optional: true, required: false
  private _walletFileContent?: string; 
  public get walletFileContent() {
    return this.getStringAttribute('wallet_file_content');
  }
  public set walletFileContent(value: string) {
    this._walletFileContent = value;
  }
  public resetWalletFileContent() {
    this._walletFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletFileContentInput() {
    return this._walletFileContent;
  }
}
export interface DatabaseServiceInstanceStandby {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}
  */
  readonly subnet: string;
}

export function databaseServiceInstanceStandbyToTerraform(struct?: DatabaseServiceInstanceStandbyOutputReference | DatabaseServiceInstanceStandby): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function databaseServiceInstanceStandbyToHclTerraform(struct?: DatabaseServiceInstanceStandbyOutputReference | DatabaseServiceInstanceStandby): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseServiceInstanceStandbyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseServiceInstanceStandby | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseServiceInstanceStandby | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._subnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._subnet = value.subnet;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}
export interface DatabaseServiceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}
  */
  readonly update?: string;
}

export function databaseServiceInstanceTimeoutsToTerraform(struct?: DatabaseServiceInstanceTimeouts | cdktf.IResolvable): any {
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


export function databaseServiceInstanceTimeoutsToHclTerraform(struct?: DatabaseServiceInstanceTimeouts | cdktf.IResolvable): any {
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

export class DatabaseServiceInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseServiceInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseServiceInstanceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance oraclepaas_database_service_instance}
*/
export class DatabaseServiceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas_database_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseServiceInstance to import
  * @param importFromId The id of the existing DatabaseServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oraclepaas_database_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance oraclepaas_database_service_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas_database_service_instance',
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
    this._availabilityDomain = config.availabilityDomain;
    this._bringYourOwnLicense = config.bringYourOwnLicense;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._edition = config.edition;
    this._highPerformanceStorage = config.highPerformanceStorage;
    this._id = config.id;
    this._ipNetwork = config.ipNetwork;
    this._ipReservations = config.ipReservations;
    this._level = config.level;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._region = config.region;
    this._shape = config.shape;
    this._sshPublicKey = config.sshPublicKey;
    this._subnet = config.subnet;
    this._subscriptionType = config.subscriptionType;
    this._version = config.version;
    this._backups.internalValue = config.backups;
    this._databaseConfiguration.internalValue = config.databaseConfiguration;
    this._defaultAccessRules.internalValue = config.defaultAccessRules;
    this._hybridDisasterRecovery.internalValue = config.hybridDisasterRecovery;
    this._instantiateFromBackup.internalValue = config.instantiateFromBackup;
    this._standby.internalValue = config.standby;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cloud_storage_container - computed: true, optional: false, required: false
  public get cloudStorageContainer() {
    return this.getStringAttribute('cloud_storage_container');
  }

  // compute_site_name - computed: true, optional: false, required: false
  public get computeSiteName() {
    return this.getStringAttribute('compute_site_name');
  }

  // dbaas_monitor_url - computed: true, optional: false, required: false
  public get dbaasMonitorUrl() {
    return this.getStringAttribute('dbaas_monitor_url');
  }

  // description - computed: false, optional: true, required: false
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

  // em_url - computed: true, optional: false, required: false
  public get emUrl() {
    return this.getStringAttribute('em_url');
  }

  // glassfish_url - computed: true, optional: false, required: false
  public get glassfishUrl() {
    return this.getStringAttribute('glassfish_url');
  }

  // high_performance_storage - computed: false, optional: true, required: false
  private _highPerformanceStorage?: boolean | cdktf.IResolvable; 
  public get highPerformanceStorage() {
    return this.getBooleanAttribute('high_performance_storage');
  }
  public set highPerformanceStorage(value: boolean | cdktf.IResolvable) {
    this._highPerformanceStorage = value;
  }
  public resetHighPerformanceStorage() {
    this._highPerformanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPerformanceStorageInput() {
    return this._highPerformanceStorage;
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

  // identity_domain - computed: true, optional: false, required: false
  public get identityDomain() {
    return this.getStringAttribute('identity_domain');
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

  // subscription_type - computed: false, optional: false, required: true
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // backups - computed: false, optional: true, required: false
  private _backups = new DatabaseServiceInstanceBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: DatabaseServiceInstanceBackups) {
    this._backups.internalValue = value;
  }
  public resetBackups() {
    this._backups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // database_configuration - computed: false, optional: false, required: true
  private _databaseConfiguration = new DatabaseServiceInstanceDatabaseConfigurationOutputReference(this, "database_configuration");
  public get databaseConfiguration() {
    return this._databaseConfiguration;
  }
  public putDatabaseConfiguration(value: DatabaseServiceInstanceDatabaseConfiguration) {
    this._databaseConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigurationInput() {
    return this._databaseConfiguration.internalValue;
  }

  // default_access_rules - computed: false, optional: true, required: false
  private _defaultAccessRules = new DatabaseServiceInstanceDefaultAccessRulesOutputReference(this, "default_access_rules");
  public get defaultAccessRules() {
    return this._defaultAccessRules;
  }
  public putDefaultAccessRules(value: DatabaseServiceInstanceDefaultAccessRules) {
    this._defaultAccessRules.internalValue = value;
  }
  public resetDefaultAccessRules() {
    this._defaultAccessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessRulesInput() {
    return this._defaultAccessRules.internalValue;
  }

  // hybrid_disaster_recovery - computed: false, optional: true, required: false
  private _hybridDisasterRecovery = new DatabaseServiceInstanceHybridDisasterRecoveryOutputReference(this, "hybrid_disaster_recovery");
  public get hybridDisasterRecovery() {
    return this._hybridDisasterRecovery;
  }
  public putHybridDisasterRecovery(value: DatabaseServiceInstanceHybridDisasterRecovery) {
    this._hybridDisasterRecovery.internalValue = value;
  }
  public resetHybridDisasterRecovery() {
    this._hybridDisasterRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridDisasterRecoveryInput() {
    return this._hybridDisasterRecovery.internalValue;
  }

  // instantiate_from_backup - computed: false, optional: true, required: false
  private _instantiateFromBackup = new DatabaseServiceInstanceInstantiateFromBackupOutputReference(this, "instantiate_from_backup");
  public get instantiateFromBackup() {
    return this._instantiateFromBackup;
  }
  public putInstantiateFromBackup(value: DatabaseServiceInstanceInstantiateFromBackup) {
    this._instantiateFromBackup.internalValue = value;
  }
  public resetInstantiateFromBackup() {
    this._instantiateFromBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantiateFromBackupInput() {
    return this._instantiateFromBackup.internalValue;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new DatabaseServiceInstanceStandbyOutputReference(this, "standby");
  public get standby() {
    return this._standby;
  }
  public putStandby(value: DatabaseServiceInstanceStandby) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseServiceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseServiceInstanceTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      bring_your_own_license: cdktf.booleanToTerraform(this._bringYourOwnLicense),
      description: cdktf.stringToTerraform(this._description),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      edition: cdktf.stringToTerraform(this._edition),
      high_performance_storage: cdktf.booleanToTerraform(this._highPerformanceStorage),
      id: cdktf.stringToTerraform(this._id),
      ip_network: cdktf.stringToTerraform(this._ipNetwork),
      ip_reservations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipReservations),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      region: cdktf.stringToTerraform(this._region),
      shape: cdktf.stringToTerraform(this._shape),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnet: cdktf.stringToTerraform(this._subnet),
      subscription_type: cdktf.stringToTerraform(this._subscriptionType),
      version: cdktf.stringToTerraform(this._version),
      backups: databaseServiceInstanceBackupsToTerraform(this._backups.internalValue),
      database_configuration: databaseServiceInstanceDatabaseConfigurationToTerraform(this._databaseConfiguration.internalValue),
      default_access_rules: databaseServiceInstanceDefaultAccessRulesToTerraform(this._defaultAccessRules.internalValue),
      hybrid_disaster_recovery: databaseServiceInstanceHybridDisasterRecoveryToTerraform(this._hybridDisasterRecovery.internalValue),
      instantiate_from_backup: databaseServiceInstanceInstantiateFromBackupToTerraform(this._instantiateFromBackup.internalValue),
      standby: databaseServiceInstanceStandbyToTerraform(this._standby.internalValue),
      timeouts: databaseServiceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
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
      high_performance_storage: {
        value: cdktf.booleanToHclTerraform(this._highPerformanceStorage),
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
      ip_reservations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipReservations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
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
      subscription_type: {
        value: cdktf.stringToHclTerraform(this._subscriptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backups: {
        value: databaseServiceInstanceBackupsToHclTerraform(this._backups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceBackupsList",
      },
      database_configuration: {
        value: databaseServiceInstanceDatabaseConfigurationToHclTerraform(this._databaseConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceDatabaseConfigurationList",
      },
      default_access_rules: {
        value: databaseServiceInstanceDefaultAccessRulesToHclTerraform(this._defaultAccessRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceDefaultAccessRulesList",
      },
      hybrid_disaster_recovery: {
        value: databaseServiceInstanceHybridDisasterRecoveryToHclTerraform(this._hybridDisasterRecovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceHybridDisasterRecoveryList",
      },
      instantiate_from_backup: {
        value: databaseServiceInstanceInstantiateFromBackupToHclTerraform(this._instantiateFromBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceInstantiateFromBackupList",
      },
      standby: {
        value: databaseServiceInstanceStandbyToHclTerraform(this._standby.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseServiceInstanceStandbyList",
      },
      timeouts: {
        value: databaseServiceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseServiceInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
