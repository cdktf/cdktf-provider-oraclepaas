/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}
  */
  readonly backupDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#description MysqlServiceInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#id MysqlServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}
  */
  readonly ipNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}
  */
  readonly meteringFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#name MysqlServiceInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#region MysqlServiceInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#shape MysqlServiceInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}
  */
  readonly sshPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#subnet MysqlServiceInstance#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}
  */
  readonly vmUser?: string;
  /**
  * backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backups MysqlServiceInstance#backups}
  */
  readonly backups?: MysqlServiceInstanceBackups;
  /**
  * mysql_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_configuration MysqlServiceInstance#mysql_configuration}
  */
  readonly mysqlConfiguration: MysqlServiceInstanceMysqlConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#timeouts MysqlServiceInstance#timeouts}
  */
  readonly timeouts?: MysqlServiceInstanceTimeouts;
}
export interface MysqlServiceInstanceBackups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}
  */
  readonly cloudStorageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}
  */
  readonly cloudStoragePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}
  */
  readonly cloudStorageUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}
  */
  readonly createIfMissing?: boolean | cdktf.IResolvable;
}

export function mysqlServiceInstanceBackupsToTerraform(struct?: MysqlServiceInstanceBackupsOutputReference | MysqlServiceInstanceBackups): any {
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


export function mysqlServiceInstanceBackupsToHclTerraform(struct?: MysqlServiceInstanceBackupsOutputReference | MysqlServiceInstanceBackups): any {
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

export class MysqlServiceInstanceBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlServiceInstanceBackups | undefined {
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

  public set internalValue(value: MysqlServiceInstanceBackups | undefined) {
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
export interface MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}
  */
  readonly emAgentPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}
  */
  readonly emAgentUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_password MysqlServiceInstance#em_password}
  */
  readonly emPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_port MysqlServiceInstance#em_port}
  */
  readonly emPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_username MysqlServiceInstance#em_username}
  */
  readonly emUsername?: string;
}

export function mysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationToTerraform(struct?: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference | MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    em_agent_password: cdktf.stringToTerraform(struct!.emAgentPassword),
    em_agent_username: cdktf.stringToTerraform(struct!.emAgentUsername),
    em_password: cdktf.stringToTerraform(struct!.emPassword),
    em_port: cdktf.numberToTerraform(struct!.emPort),
    em_username: cdktf.stringToTerraform(struct!.emUsername),
  }
}


export function mysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationToHclTerraform(struct?: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference | MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    em_agent_password: {
      value: cdktf.stringToHclTerraform(struct!.emAgentPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    em_agent_username: {
      value: cdktf.stringToHclTerraform(struct!.emAgentUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    em_password: {
      value: cdktf.stringToHclTerraform(struct!.emPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    em_port: {
      value: cdktf.numberToHclTerraform(struct!.emPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    em_username: {
      value: cdktf.stringToHclTerraform(struct!.emUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emAgentPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.emAgentPassword = this._emAgentPassword;
    }
    if (this._emAgentUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.emAgentUsername = this._emAgentUsername;
    }
    if (this._emPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.emPassword = this._emPassword;
    }
    if (this._emPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.emPort = this._emPort;
    }
    if (this._emUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.emUsername = this._emUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emAgentPassword = undefined;
      this._emAgentUsername = undefined;
      this._emPassword = undefined;
      this._emPort = undefined;
      this._emUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emAgentPassword = value.emAgentPassword;
      this._emAgentUsername = value.emAgentUsername;
      this._emPassword = value.emPassword;
      this._emPort = value.emPort;
      this._emUsername = value.emUsername;
    }
  }

  // em_agent_password - computed: false, optional: true, required: false
  private _emAgentPassword?: string; 
  public get emAgentPassword() {
    return this.getStringAttribute('em_agent_password');
  }
  public set emAgentPassword(value: string) {
    this._emAgentPassword = value;
  }
  public resetEmAgentPassword() {
    this._emAgentPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emAgentPasswordInput() {
    return this._emAgentPassword;
  }

  // em_agent_username - computed: false, optional: true, required: false
  private _emAgentUsername?: string; 
  public get emAgentUsername() {
    return this.getStringAttribute('em_agent_username');
  }
  public set emAgentUsername(value: string) {
    this._emAgentUsername = value;
  }
  public resetEmAgentUsername() {
    this._emAgentUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emAgentUsernameInput() {
    return this._emAgentUsername;
  }

  // em_password - computed: false, optional: true, required: false
  private _emPassword?: string; 
  public get emPassword() {
    return this.getStringAttribute('em_password');
  }
  public set emPassword(value: string) {
    this._emPassword = value;
  }
  public resetEmPassword() {
    this._emPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emPasswordInput() {
    return this._emPassword;
  }

  // em_port - computed: true, optional: true, required: false
  private _emPort?: number; 
  public get emPort() {
    return this.getNumberAttribute('em_port');
  }
  public set emPort(value: number) {
    this._emPort = value;
  }
  public resetEmPort() {
    this._emPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emPortInput() {
    return this._emPort;
  }

  // em_username - computed: false, optional: true, required: false
  private _emUsername?: string; 
  public get emUsername() {
    return this.getStringAttribute('em_username');
  }
  public set emUsername(value: string) {
    this._emUsername = value;
  }
  public resetEmUsername() {
    this._emUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emUsernameInput() {
    return this._emUsername;
  }
}
export interface MysqlServiceInstanceMysqlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_name MysqlServiceInstance#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}
  */
  readonly dbStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}
  */
  readonly mysqlCharset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}
  */
  readonly mysqlCollation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}
  */
  readonly mysqlPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}
  */
  readonly mysqlPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}
  */
  readonly mysqlUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}
  */
  readonly sourceServiceName?: string;
  /**
  * enterprise_monitor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#enterprise_monitor_configuration MysqlServiceInstance#enterprise_monitor_configuration}
  */
  readonly enterpriseMonitorConfiguration?: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration;
}

export function mysqlServiceInstanceMysqlConfigurationToTerraform(struct?: MysqlServiceInstanceMysqlConfigurationOutputReference | MysqlServiceInstanceMysqlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_storage: cdktf.numberToTerraform(struct!.dbStorage),
    mysql_charset: cdktf.stringToTerraform(struct!.mysqlCharset),
    mysql_collation: cdktf.stringToTerraform(struct!.mysqlCollation),
    mysql_password: cdktf.stringToTerraform(struct!.mysqlPassword),
    mysql_port: cdktf.numberToTerraform(struct!.mysqlPort),
    mysql_username: cdktf.stringToTerraform(struct!.mysqlUsername),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
    enterprise_monitor_configuration: mysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationToTerraform(struct!.enterpriseMonitorConfiguration),
  }
}


export function mysqlServiceInstanceMysqlConfigurationToHclTerraform(struct?: MysqlServiceInstanceMysqlConfigurationOutputReference | MysqlServiceInstanceMysqlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_storage: {
      value: cdktf.numberToHclTerraform(struct!.dbStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysql_charset: {
      value: cdktf.stringToHclTerraform(struct!.mysqlCharset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_collation: {
      value: cdktf.stringToHclTerraform(struct!.mysqlCollation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_password: {
      value: cdktf.stringToHclTerraform(struct!.mysqlPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_port: {
      value: cdktf.numberToHclTerraform(struct!.mysqlPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysql_username: {
      value: cdktf.stringToHclTerraform(struct!.mysqlUsername),
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
    enterprise_monitor_configuration: {
      value: mysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationToHclTerraform(struct!.enterpriseMonitorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlServiceInstanceMysqlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlServiceInstanceMysqlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbStorage = this._dbStorage;
    }
    if (this._mysqlCharset !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlCharset = this._mysqlCharset;
    }
    if (this._mysqlCollation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlCollation = this._mysqlCollation;
    }
    if (this._mysqlPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlPassword = this._mysqlPassword;
    }
    if (this._mysqlPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlPort = this._mysqlPort;
    }
    if (this._mysqlUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlUsername = this._mysqlUsername;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    if (this._enterpriseMonitorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseMonitorConfiguration = this._enterpriseMonitorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlServiceInstanceMysqlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._dbStorage = undefined;
      this._mysqlCharset = undefined;
      this._mysqlCollation = undefined;
      this._mysqlPassword = undefined;
      this._mysqlPort = undefined;
      this._mysqlUsername = undefined;
      this._snapshotName = undefined;
      this._sourceServiceName = undefined;
      this._enterpriseMonitorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._dbStorage = value.dbStorage;
      this._mysqlCharset = value.mysqlCharset;
      this._mysqlCollation = value.mysqlCollation;
      this._mysqlPassword = value.mysqlPassword;
      this._mysqlPort = value.mysqlPort;
      this._mysqlUsername = value.mysqlUsername;
      this._snapshotName = value.snapshotName;
      this._sourceServiceName = value.sourceServiceName;
      this._enterpriseMonitorConfiguration.internalValue = value.enterpriseMonitorConfiguration;
    }
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_storage - computed: false, optional: true, required: false
  private _dbStorage?: number; 
  public get dbStorage() {
    return this.getNumberAttribute('db_storage');
  }
  public set dbStorage(value: number) {
    this._dbStorage = value;
  }
  public resetDbStorage() {
    this._dbStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbStorageInput() {
    return this._dbStorage;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mysql_charset - computed: true, optional: true, required: false
  private _mysqlCharset?: string; 
  public get mysqlCharset() {
    return this.getStringAttribute('mysql_charset');
  }
  public set mysqlCharset(value: string) {
    this._mysqlCharset = value;
  }
  public resetMysqlCharset() {
    this._mysqlCharset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlCharsetInput() {
    return this._mysqlCharset;
  }

  // mysql_collation - computed: true, optional: true, required: false
  private _mysqlCollation?: string; 
  public get mysqlCollation() {
    return this.getStringAttribute('mysql_collation');
  }
  public set mysqlCollation(value: string) {
    this._mysqlCollation = value;
  }
  public resetMysqlCollation() {
    this._mysqlCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlCollationInput() {
    return this._mysqlCollation;
  }

  // mysql_password - computed: false, optional: true, required: false
  private _mysqlPassword?: string; 
  public get mysqlPassword() {
    return this.getStringAttribute('mysql_password');
  }
  public set mysqlPassword(value: string) {
    this._mysqlPassword = value;
  }
  public resetMysqlPassword() {
    this._mysqlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlPasswordInput() {
    return this._mysqlPassword;
  }

  // mysql_port - computed: false, optional: true, required: false
  private _mysqlPort?: number; 
  public get mysqlPort() {
    return this.getNumberAttribute('mysql_port');
  }
  public set mysqlPort(value: number) {
    this._mysqlPort = value;
  }
  public resetMysqlPort() {
    this._mysqlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlPortInput() {
    return this._mysqlPort;
  }

  // mysql_username - computed: false, optional: true, required: false
  private _mysqlUsername?: string; 
  public get mysqlUsername() {
    return this.getStringAttribute('mysql_username');
  }
  public set mysqlUsername(value: string) {
    this._mysqlUsername = value;
  }
  public resetMysqlUsername() {
    this._mysqlUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlUsernameInput() {
    return this._mysqlUsername;
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
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

  // enterprise_monitor_configuration - computed: false, optional: true, required: false
  private _enterpriseMonitorConfiguration = new MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference(this, "enterprise_monitor_configuration");
  public get enterpriseMonitorConfiguration() {
    return this._enterpriseMonitorConfiguration;
  }
  public putEnterpriseMonitorConfiguration(value: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration) {
    this._enterpriseMonitorConfiguration.internalValue = value;
  }
  public resetEnterpriseMonitorConfiguration() {
    this._enterpriseMonitorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseMonitorConfigurationInput() {
    return this._enterpriseMonitorConfiguration.internalValue;
  }
}
export interface MysqlServiceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create MysqlServiceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#delete MysqlServiceInstance#delete}
  */
  readonly delete?: string;
}

export function mysqlServiceInstanceTimeoutsToTerraform(struct?: MysqlServiceInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function mysqlServiceInstanceTimeoutsToHclTerraform(struct?: MysqlServiceInstanceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlServiceInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlServiceInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlServiceInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance oraclepaas_mysql_service_instance}
*/
export class MysqlServiceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas_mysql_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlServiceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlServiceInstance to import
  * @param importFromId The id of the existing MysqlServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oraclepaas_mysql_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance oraclepaas_mysql_service_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas_mysql_service_instance',
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
    this._backupDestination = config.backupDestination;
    this._description = config.description;
    this._id = config.id;
    this._ipNetwork = config.ipNetwork;
    this._meteringFrequency = config.meteringFrequency;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._region = config.region;
    this._shape = config.shape;
    this._sshPublicKey = config.sshPublicKey;
    this._subnet = config.subnet;
    this._vmUser = config.vmUser;
    this._backups.internalValue = config.backups;
    this._mysqlConfiguration.internalValue = config.mysqlConfiguration;
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

  // base_release_version - computed: true, optional: false, required: false
  public get baseReleaseVersion() {
    return this.getStringAttribute('base_release_version');
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

  // em_url - computed: true, optional: false, required: false
  public get emUrl() {
    return this.getStringAttribute('em_url');
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

  // release_version - computed: true, optional: false, required: false
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
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

  // vm_user - computed: false, optional: true, required: false
  private _vmUser?: string; 
  public get vmUser() {
    return this.getStringAttribute('vm_user');
  }
  public set vmUser(value: string) {
    this._vmUser = value;
  }
  public resetVmUser() {
    this._vmUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmUserInput() {
    return this._vmUser;
  }

  // backups - computed: false, optional: true, required: false
  private _backups = new MysqlServiceInstanceBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: MysqlServiceInstanceBackups) {
    this._backups.internalValue = value;
  }
  public resetBackups() {
    this._backups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // mysql_configuration - computed: false, optional: false, required: true
  private _mysqlConfiguration = new MysqlServiceInstanceMysqlConfigurationOutputReference(this, "mysql_configuration");
  public get mysqlConfiguration() {
    return this._mysqlConfiguration;
  }
  public putMysqlConfiguration(value: MysqlServiceInstanceMysqlConfiguration) {
    this._mysqlConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigurationInput() {
    return this._mysqlConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlServiceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlServiceInstanceTimeouts) {
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
      backup_destination: cdktf.stringToTerraform(this._backupDestination),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_network: cdktf.stringToTerraform(this._ipNetwork),
      metering_frequency: cdktf.stringToTerraform(this._meteringFrequency),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      region: cdktf.stringToTerraform(this._region),
      shape: cdktf.stringToTerraform(this._shape),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnet: cdktf.stringToTerraform(this._subnet),
      vm_user: cdktf.stringToTerraform(this._vmUser),
      backups: mysqlServiceInstanceBackupsToTerraform(this._backups.internalValue),
      mysql_configuration: mysqlServiceInstanceMysqlConfigurationToTerraform(this._mysqlConfiguration.internalValue),
      timeouts: mysqlServiceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      backup_destination: {
        value: cdktf.stringToHclTerraform(this._backupDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vm_user: {
        value: cdktf.stringToHclTerraform(this._vmUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backups: {
        value: mysqlServiceInstanceBackupsToHclTerraform(this._backups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlServiceInstanceBackupsList",
      },
      mysql_configuration: {
        value: mysqlServiceInstanceMysqlConfigurationToHclTerraform(this._mysqlConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlServiceInstanceMysqlConfigurationList",
      },
      timeouts: {
        value: mysqlServiceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlServiceInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
