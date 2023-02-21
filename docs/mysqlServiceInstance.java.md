# `mysqlServiceInstance` Submodule <a name="`mysqlServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.mysqlServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlServiceInstance <a name="MysqlServiceInstance" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance oraclepaas_mysql_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstance;

MysqlServiceInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .mysqlConfiguration(MysqlServiceInstanceMysqlConfiguration)
    .name(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKey(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backupDestination(java.lang.String)
//  .backups(MysqlServiceInstanceBackups)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .meteringFrequency(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .subnet(java.lang.String)
//  .timeouts(MysqlServiceInstanceTimeouts)
//  .vmUser(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.mysqlConfiguration">mysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | mysql_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#name MysqlServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#shape MysqlServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#description MysqlServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#id MysqlServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#region MysqlServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#subnet MysqlServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.vmUser">vmUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mysqlConfiguration`<sup>Required</sup> <a name="mysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.mysqlConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

mysql_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_configuration MysqlServiceInstance#mysql_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#name MysqlServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#shape MysqlServiceInstance#shape}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.sshPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.backupDestination"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.backups"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backups MysqlServiceInstance#backups}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#description MysqlServiceInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#id MysqlServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.ipNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}.

---

##### `meteringFrequency`<sup>Optional</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.meteringFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#region MysqlServiceInstance#region}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.subnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#subnet MysqlServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#timeouts MysqlServiceInstance#timeouts}

---

##### `vmUser`<sup>Optional</sup> <a name="vmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.vmUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups">putBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration">putMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination">resetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups">resetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency">resetMeteringFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser">resetVmUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBackups` <a name="putBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups"></a>

```java
public void putBackups(MysqlServiceInstanceBackups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `putMysqlConfiguration` <a name="putMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration"></a>

```java
public void putMysqlConfiguration(MysqlServiceInstanceMysqlConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts"></a>

```java
public void putTimeouts(MysqlServiceInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetBackupDestination` <a name="resetBackupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination"></a>

```java
public void resetBackupDestination()
```

##### `resetBackups` <a name="resetBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups"></a>

```java
public void resetBackups()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetMeteringFrequency` <a name="resetMeteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency"></a>

```java
public void resetMeteringFrequency()
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail"></a>

```java
public void resetNotificationEmail()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVmUser` <a name="resetVmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser"></a>

```java
public void resetVmUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstance;

MysqlServiceInstance.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstance;

MysqlServiceInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstance;

MysqlServiceInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion">baseReleaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl">emUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration">mysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion">releaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput">backupDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput">backupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput">meteringFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput">mysqlConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput">vmUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser">vmUser</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups"></a>

```java
public MysqlServiceInstanceBackupsOutputReference getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a>

---

##### `baseReleaseVersion`<sup>Required</sup> <a name="baseReleaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion"></a>

```java
public java.lang.String getBaseReleaseVersion();
```

- *Type:* java.lang.String

---

##### `emUrl`<sup>Required</sup> <a name="emUrl" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl"></a>

```java
public java.lang.String getEmUrl();
```

- *Type:* java.lang.String

---

##### `mysqlConfiguration`<sup>Required</sup> <a name="mysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration"></a>

```java
public MysqlServiceInstanceMysqlConfigurationOutputReference getMysqlConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a>

---

##### `releaseVersion`<sup>Required</sup> <a name="releaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion"></a>

```java
public java.lang.String getReleaseVersion();
```

- *Type:* java.lang.String

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts"></a>

```java
public MysqlServiceInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupDestinationInput`<sup>Optional</sup> <a name="backupDestinationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput"></a>

```java
public java.lang.String getBackupDestinationInput();
```

- *Type:* java.lang.String

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput"></a>

```java
public MysqlServiceInstanceBackups getBackupsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `meteringFrequencyInput`<sup>Optional</sup> <a name="meteringFrequencyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput"></a>

```java
public java.lang.String getMeteringFrequencyInput();
```

- *Type:* java.lang.String

---

##### `mysqlConfigurationInput`<sup>Optional</sup> <a name="mysqlConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput"></a>

```java
public MysqlServiceInstanceMysqlConfiguration getMysqlConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vmUserInput`<sup>Optional</sup> <a name="vmUserInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput"></a>

```java
public java.lang.String getVmUserInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupDestination`<sup>Required</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `meteringFrequency`<sup>Required</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency"></a>

```java
public java.lang.String getMeteringFrequency();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `vmUser`<sup>Required</sup> <a name="vmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser"></a>

```java
public java.lang.String getVmUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlServiceInstanceBackups <a name="MysqlServiceInstanceBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceBackups;

MysqlServiceInstanceBackups.builder()
    .cloudStorageContainer(java.lang.String)
//  .cloudStoragePassword(java.lang.String)
//  .cloudStorageUsername(java.lang.String)
//  .createIfMissing(java.lang.Boolean)
//  .createIfMissing(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing">createIfMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}.

---

##### `createIfMissing`<sup>Optional</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing"></a>

```java
public java.lang.Object getCreateIfMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}.

---

### MysqlServiceInstanceConfig <a name="MysqlServiceInstanceConfig" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceConfig;

MysqlServiceInstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .mysqlConfiguration(MysqlServiceInstanceMysqlConfiguration)
    .name(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKey(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backupDestination(java.lang.String)
//  .backups(MysqlServiceInstanceBackups)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .meteringFrequency(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .subnet(java.lang.String)
//  .timeouts(MysqlServiceInstanceTimeouts)
//  .vmUser(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration">mysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | mysql_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#name MysqlServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#shape MysqlServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#description MysqlServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#id MysqlServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#region MysqlServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#subnet MysqlServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser">vmUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mysqlConfiguration`<sup>Required</sup> <a name="mysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration"></a>

```java
public MysqlServiceInstanceMysqlConfiguration getMysqlConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

mysql_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_configuration MysqlServiceInstance#mysql_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#name MysqlServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#shape MysqlServiceInstance#shape}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups"></a>

```java
public MysqlServiceInstanceBackups getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#backups MysqlServiceInstance#backups}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#description MysqlServiceInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#id MysqlServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}.

---

##### `meteringFrequency`<sup>Optional</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency"></a>

```java
public java.lang.String getMeteringFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#region MysqlServiceInstance#region}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#subnet MysqlServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts"></a>

```java
public MysqlServiceInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#timeouts MysqlServiceInstance#timeouts}

---

##### `vmUser`<sup>Optional</sup> <a name="vmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser"></a>

```java
public java.lang.String getVmUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}.

---

### MysqlServiceInstanceMysqlConfiguration <a name="MysqlServiceInstanceMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceMysqlConfiguration;

MysqlServiceInstanceMysqlConfiguration.builder()
//  .dbName(java.lang.String)
//  .dbStorage(java.lang.Number)
//  .enterpriseMonitorConfiguration(MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration)
//  .mysqlCharset(java.lang.String)
//  .mysqlCollation(java.lang.String)
//  .mysqlPassword(java.lang.String)
//  .mysqlPort(java.lang.Number)
//  .mysqlUsername(java.lang.String)
//  .snapshotName(java.lang.String)
//  .sourceServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#db_name MysqlServiceInstance#db_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage">dbStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration">enterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | enterprise_monitor_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset">mysqlCharset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation">mysqlCollation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword">mysqlPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort">mysqlPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername">mysqlUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}. |

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#db_name MysqlServiceInstance#db_name}.

---

##### `dbStorage`<sup>Optional</sup> <a name="dbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage"></a>

```java
public java.lang.Number getDbStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}.

---

##### `enterpriseMonitorConfiguration`<sup>Optional</sup> <a name="enterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration"></a>

```java
public MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration getEnterpriseMonitorConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

enterprise_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#enterprise_monitor_configuration MysqlServiceInstance#enterprise_monitor_configuration}

---

##### `mysqlCharset`<sup>Optional</sup> <a name="mysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset"></a>

```java
public java.lang.String getMysqlCharset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}.

---

##### `mysqlCollation`<sup>Optional</sup> <a name="mysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation"></a>

```java
public java.lang.String getMysqlCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}.

---

##### `mysqlPassword`<sup>Optional</sup> <a name="mysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword"></a>

```java
public java.lang.String getMysqlPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}.

---

##### `mysqlPort`<sup>Optional</sup> <a name="mysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort"></a>

```java
public java.lang.Number getMysqlPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}.

---

##### `mysqlUsername`<sup>Optional</sup> <a name="mysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername"></a>

```java
public java.lang.String getMysqlUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}.

---

##### `sourceServiceName`<sup>Optional</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}.

---

### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration;

MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.builder()
//  .emAgentPassword(java.lang.String)
//  .emAgentUsername(java.lang.String)
//  .emPassword(java.lang.String)
//  .emPort(java.lang.Number)
//  .emUsername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword">emAgentPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername">emAgentUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword">emPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_password MysqlServiceInstance#em_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort">emPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_port MysqlServiceInstance#em_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername">emUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_username MysqlServiceInstance#em_username}. |

---

##### `emAgentPassword`<sup>Optional</sup> <a name="emAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword"></a>

```java
public java.lang.String getEmAgentPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}.

---

##### `emAgentUsername`<sup>Optional</sup> <a name="emAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername"></a>

```java
public java.lang.String getEmAgentUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}.

---

##### `emPassword`<sup>Optional</sup> <a name="emPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword"></a>

```java
public java.lang.String getEmPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_password MysqlServiceInstance#em_password}.

---

##### `emPort`<sup>Optional</sup> <a name="emPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort"></a>

```java
public java.lang.Number getEmPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_port MysqlServiceInstance#em_port}.

---

##### `emUsername`<sup>Optional</sup> <a name="emUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername"></a>

```java
public java.lang.String getEmUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#em_username MysqlServiceInstance#em_username}.

---

### MysqlServiceInstanceTimeouts <a name="MysqlServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceTimeouts;

MysqlServiceInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#create MysqlServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#delete MysqlServiceInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#create MysqlServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_service_instance#delete MysqlServiceInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlServiceInstanceBackupsOutputReference <a name="MysqlServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceBackupsOutputReference;

new MysqlServiceInstanceBackupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing">resetCreateIfMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```java
public void resetCloudStoragePassword()
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```java
public void resetCloudStorageUsername()
```

##### `resetCreateIfMissing` <a name="resetCreateIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```java
public void resetCreateIfMissing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput">createIfMissingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing">createIfMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```java
public java.lang.String getCloudStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```java
public java.lang.String getCloudStoragePasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```java
public java.lang.String getCloudStorageUsernameInput();
```

- *Type:* java.lang.String

---

##### `createIfMissingInput`<sup>Optional</sup> <a name="createIfMissingInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```java
public java.lang.Object getCreateIfMissingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

---

##### `createIfMissing`<sup>Required</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```java
public java.lang.Object getCreateIfMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue"></a>

```java
public MysqlServiceInstanceBackups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---


### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference;

new MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword">resetEmAgentPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername">resetEmAgentUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword">resetEmPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort">resetEmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername">resetEmUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmAgentPassword` <a name="resetEmAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword"></a>

```java
public void resetEmAgentPassword()
```

##### `resetEmAgentUsername` <a name="resetEmAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername"></a>

```java
public void resetEmAgentUsername()
```

##### `resetEmPassword` <a name="resetEmPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword"></a>

```java
public void resetEmPassword()
```

##### `resetEmPort` <a name="resetEmPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort"></a>

```java
public void resetEmPort()
```

##### `resetEmUsername` <a name="resetEmUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername"></a>

```java
public void resetEmUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput">emAgentPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput">emAgentUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput">emPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput">emPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput">emUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword">emAgentPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername">emAgentUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword">emPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort">emPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername">emUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emAgentPasswordInput`<sup>Optional</sup> <a name="emAgentPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput"></a>

```java
public java.lang.String getEmAgentPasswordInput();
```

- *Type:* java.lang.String

---

##### `emAgentUsernameInput`<sup>Optional</sup> <a name="emAgentUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput"></a>

```java
public java.lang.String getEmAgentUsernameInput();
```

- *Type:* java.lang.String

---

##### `emPasswordInput`<sup>Optional</sup> <a name="emPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput"></a>

```java
public java.lang.String getEmPasswordInput();
```

- *Type:* java.lang.String

---

##### `emPortInput`<sup>Optional</sup> <a name="emPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput"></a>

```java
public java.lang.Number getEmPortInput();
```

- *Type:* java.lang.Number

---

##### `emUsernameInput`<sup>Optional</sup> <a name="emUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput"></a>

```java
public java.lang.String getEmUsernameInput();
```

- *Type:* java.lang.String

---

##### `emAgentPassword`<sup>Required</sup> <a name="emAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword"></a>

```java
public java.lang.String getEmAgentPassword();
```

- *Type:* java.lang.String

---

##### `emAgentUsername`<sup>Required</sup> <a name="emAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername"></a>

```java
public java.lang.String getEmAgentUsername();
```

- *Type:* java.lang.String

---

##### `emPassword`<sup>Required</sup> <a name="emPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword"></a>

```java
public java.lang.String getEmPassword();
```

- *Type:* java.lang.String

---

##### `emPort`<sup>Required</sup> <a name="emPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort"></a>

```java
public java.lang.Number getEmPort();
```

- *Type:* java.lang.Number

---

##### `emUsername`<sup>Required</sup> <a name="emUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername"></a>

```java
public java.lang.String getEmUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue"></a>

```java
public MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---


### MysqlServiceInstanceMysqlConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceMysqlConfigurationOutputReference;

new MysqlServiceInstanceMysqlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration">putEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage">resetDbStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration">resetEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset">resetMysqlCharset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation">resetMysqlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword">resetMysqlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort">resetMysqlPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername">resetMysqlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName">resetSourceServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnterpriseMonitorConfiguration` <a name="putEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration"></a>

```java
public void putEnterpriseMonitorConfiguration(MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbStorage` <a name="resetDbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage"></a>

```java
public void resetDbStorage()
```

##### `resetEnterpriseMonitorConfiguration` <a name="resetEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration"></a>

```java
public void resetEnterpriseMonitorConfiguration()
```

##### `resetMysqlCharset` <a name="resetMysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset"></a>

```java
public void resetMysqlCharset()
```

##### `resetMysqlCollation` <a name="resetMysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation"></a>

```java
public void resetMysqlCollation()
```

##### `resetMysqlPassword` <a name="resetMysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword"></a>

```java
public void resetMysqlPassword()
```

##### `resetMysqlPort` <a name="resetMysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort"></a>

```java
public void resetMysqlPort()
```

##### `resetMysqlUsername` <a name="resetMysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername"></a>

```java
public void resetMysqlUsername()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSourceServiceName` <a name="resetSourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName"></a>

```java
public void resetSourceServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString">connectString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration">enterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput">dbStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput">enterpriseMonitorConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput">mysqlCharsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput">mysqlCollationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput">mysqlPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput">mysqlPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput">mysqlUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput">sourceServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage">dbStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset">mysqlCharset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation">mysqlCollation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword">mysqlPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort">mysqlPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername">mysqlUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectString`<sup>Required</sup> <a name="connectString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString"></a>

```java
public java.lang.String getConnectString();
```

- *Type:* java.lang.String

---

##### `enterpriseMonitorConfiguration`<sup>Required</sup> <a name="enterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration"></a>

```java
public MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference getEnterpriseMonitorConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbStorageInput`<sup>Optional</sup> <a name="dbStorageInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput"></a>

```java
public java.lang.Number getDbStorageInput();
```

- *Type:* java.lang.Number

---

##### `enterpriseMonitorConfigurationInput`<sup>Optional</sup> <a name="enterpriseMonitorConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput"></a>

```java
public MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration getEnterpriseMonitorConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `mysqlCharsetInput`<sup>Optional</sup> <a name="mysqlCharsetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput"></a>

```java
public java.lang.String getMysqlCharsetInput();
```

- *Type:* java.lang.String

---

##### `mysqlCollationInput`<sup>Optional</sup> <a name="mysqlCollationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput"></a>

```java
public java.lang.String getMysqlCollationInput();
```

- *Type:* java.lang.String

---

##### `mysqlPasswordInput`<sup>Optional</sup> <a name="mysqlPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput"></a>

```java
public java.lang.String getMysqlPasswordInput();
```

- *Type:* java.lang.String

---

##### `mysqlPortInput`<sup>Optional</sup> <a name="mysqlPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput"></a>

```java
public java.lang.Number getMysqlPortInput();
```

- *Type:* java.lang.Number

---

##### `mysqlUsernameInput`<sup>Optional</sup> <a name="mysqlUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput"></a>

```java
public java.lang.String getMysqlUsernameInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `sourceServiceNameInput`<sup>Optional</sup> <a name="sourceServiceNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput"></a>

```java
public java.lang.String getSourceServiceNameInput();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbStorage`<sup>Required</sup> <a name="dbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage"></a>

```java
public java.lang.Number getDbStorage();
```

- *Type:* java.lang.Number

---

##### `mysqlCharset`<sup>Required</sup> <a name="mysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset"></a>

```java
public java.lang.String getMysqlCharset();
```

- *Type:* java.lang.String

---

##### `mysqlCollation`<sup>Required</sup> <a name="mysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation"></a>

```java
public java.lang.String getMysqlCollation();
```

- *Type:* java.lang.String

---

##### `mysqlPassword`<sup>Required</sup> <a name="mysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword"></a>

```java
public java.lang.String getMysqlPassword();
```

- *Type:* java.lang.String

---

##### `mysqlPort`<sup>Required</sup> <a name="mysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort"></a>

```java
public java.lang.Number getMysqlPort();
```

- *Type:* java.lang.Number

---

##### `mysqlUsername`<sup>Required</sup> <a name="mysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername"></a>

```java
public java.lang.String getMysqlUsername();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `sourceServiceName`<sup>Required</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue"></a>

```java
public MysqlServiceInstanceMysqlConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---


### MysqlServiceInstanceTimeoutsOutputReference <a name="MysqlServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.mysql_service_instance.MysqlServiceInstanceTimeoutsOutputReference;

new MysqlServiceInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



