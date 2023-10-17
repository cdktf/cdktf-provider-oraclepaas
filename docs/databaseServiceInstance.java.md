# `oraclepaas_database_service_instance`

Refer to the Terraform Registory for docs: [`oraclepaas_database_service_instance`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance).

# `databaseServiceInstance` Submodule <a name="`databaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.databaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseServiceInstance <a name="DatabaseServiceInstance" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstance;

DatabaseServiceInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseConfiguration(DatabaseServiceInstanceDatabaseConfiguration)
    .edition(java.lang.String)
    .name(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKey(java.lang.String)
    .subscriptionType(java.lang.String)
    .version(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backups(DatabaseServiceInstanceBackups)
//  .bringYourOwnLicense(java.lang.Boolean)
//  .bringYourOwnLicense(IResolvable)
//  .defaultAccessRules(DatabaseServiceInstanceDefaultAccessRules)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .highPerformanceStorage(java.lang.Boolean)
//  .highPerformanceStorage(IResolvable)
//  .hybridDisasterRecovery(DatabaseServiceInstanceHybridDisasterRecovery)
//  .id(java.lang.String)
//  .instantiateFromBackup(DatabaseServiceInstanceInstantiateFromBackup)
//  .ipNetwork(java.lang.String)
//  .ipReservations(java.util.List<java.lang.String>)
//  .level(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .standby(DatabaseServiceInstanceStandby)
//  .subnet(java.lang.String)
//  .timeouts(DatabaseServiceInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.databaseConfiguration">databaseConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | database_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.defaultAccessRules">defaultAccessRules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | default_access_rules block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.highPerformanceStorage">highPerformanceStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.hybridDisasterRecovery">hybridDisasterRecovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | hybrid_disaster_recovery block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.instantiateFromBackup">instantiateFromBackup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | instantiate_from_backup block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | standby block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.databaseConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

database_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.sshPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}.

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subscriptionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.backups"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}

---

##### `bringYourOwnLicense`<sup>Optional</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.bringYourOwnLicense"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}.

---

##### `defaultAccessRules`<sup>Optional</sup> <a name="defaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.defaultAccessRules"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

default_access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}.

---

##### `highPerformanceStorage`<sup>Optional</sup> <a name="highPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.highPerformanceStorage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}.

---

##### `hybridDisasterRecovery`<sup>Optional</sup> <a name="hybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.hybridDisasterRecovery"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

hybrid_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instantiateFromBackup`<sup>Optional</sup> <a name="instantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.instantiateFromBackup"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

instantiate_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}.

---

##### `ipReservations`<sup>Optional</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipReservations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}.

---

##### `standby`<sup>Optional</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.standby"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

standby block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timeouts DatabaseServiceInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups">putBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration">putDatabaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules">putDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery">putHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup">putInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby">putStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups">resetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense">resetBringYourOwnLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules">resetDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage">resetHighPerformanceStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery">resetHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup">resetInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations">resetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby">resetStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBackups` <a name="putBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups"></a>

```java
public void putBackups(DatabaseServiceInstanceBackups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---

##### `putDatabaseConfiguration` <a name="putDatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration"></a>

```java
public void putDatabaseConfiguration(DatabaseServiceInstanceDatabaseConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---

##### `putDefaultAccessRules` <a name="putDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules"></a>

```java
public void putDefaultAccessRules(DatabaseServiceInstanceDefaultAccessRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---

##### `putHybridDisasterRecovery` <a name="putHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery"></a>

```java
public void putHybridDisasterRecovery(DatabaseServiceInstanceHybridDisasterRecovery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---

##### `putInstantiateFromBackup` <a name="putInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup"></a>

```java
public void putInstantiateFromBackup(DatabaseServiceInstanceInstantiateFromBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---

##### `putStandby` <a name="putStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby"></a>

```java
public void putStandby(DatabaseServiceInstanceStandby value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts"></a>

```java
public void putTimeouts(DatabaseServiceInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetBackups` <a name="resetBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups"></a>

```java
public void resetBackups()
```

##### `resetBringYourOwnLicense` <a name="resetBringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense"></a>

```java
public void resetBringYourOwnLicense()
```

##### `resetDefaultAccessRules` <a name="resetDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules"></a>

```java
public void resetDefaultAccessRules()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetHighPerformanceStorage` <a name="resetHighPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage"></a>

```java
public void resetHighPerformanceStorage()
```

##### `resetHybridDisasterRecovery` <a name="resetHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery"></a>

```java
public void resetHybridDisasterRecovery()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstantiateFromBackup` <a name="resetInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup"></a>

```java
public void resetInstantiateFromBackup()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetIpReservations` <a name="resetIpReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations"></a>

```java
public void resetIpReservations()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail"></a>

```java
public void resetNotificationEmail()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStandby` <a name="resetStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby"></a>

```java
public void resetStandby()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstance;

DatabaseServiceInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstance;

DatabaseServiceInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstance;

DatabaseServiceInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstance;

DatabaseServiceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseServiceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName">computeSiteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration">databaseConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl">dbaasMonitorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules">defaultAccessRules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl">emUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl">glassfishUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery">hybridDisasterRecovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup">instantiateFromBackup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput">backupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput">bringYourOwnLicenseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput">databaseConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput">defaultAccessRulesInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput">highPerformanceStorageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput">hybridDisasterRecoveryInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput">instantiateFromBackupInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput">ipReservationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput">standbyInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage">highPerformanceStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups"></a>

```java
public DatabaseServiceInstanceBackupsOutputReference getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a>

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `computeSiteName`<sup>Required</sup> <a name="computeSiteName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName"></a>

```java
public java.lang.String getComputeSiteName();
```

- *Type:* java.lang.String

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration"></a>

```java
public DatabaseServiceInstanceDatabaseConfigurationOutputReference getDatabaseConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a>

---

##### `dbaasMonitorUrl`<sup>Required</sup> <a name="dbaasMonitorUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl"></a>

```java
public java.lang.String getDbaasMonitorUrl();
```

- *Type:* java.lang.String

---

##### `defaultAccessRules`<sup>Required</sup> <a name="defaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules"></a>

```java
public DatabaseServiceInstanceDefaultAccessRulesOutputReference getDefaultAccessRules();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a>

---

##### `emUrl`<sup>Required</sup> <a name="emUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl"></a>

```java
public java.lang.String getEmUrl();
```

- *Type:* java.lang.String

---

##### `glassfishUrl`<sup>Required</sup> <a name="glassfishUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl"></a>

```java
public java.lang.String getGlassfishUrl();
```

- *Type:* java.lang.String

---

##### `hybridDisasterRecovery`<sup>Required</sup> <a name="hybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery"></a>

```java
public DatabaseServiceInstanceHybridDisasterRecoveryOutputReference getHybridDisasterRecovery();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a>

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain"></a>

```java
public java.lang.String getIdentityDomain();
```

- *Type:* java.lang.String

---

##### `instantiateFromBackup`<sup>Required</sup> <a name="instantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup"></a>

```java
public DatabaseServiceInstanceInstantiateFromBackupOutputReference getInstantiateFromBackup();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a>

---

##### `standby`<sup>Required</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby"></a>

```java
public DatabaseServiceInstanceStandbyOutputReference getStandby();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts"></a>

```java
public DatabaseServiceInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput"></a>

```java
public DatabaseServiceInstanceBackups getBackupsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---

##### `bringYourOwnLicenseInput`<sup>Optional</sup> <a name="bringYourOwnLicenseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput"></a>

```java
public java.lang.Object getBringYourOwnLicenseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseConfigurationInput`<sup>Optional</sup> <a name="databaseConfigurationInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput"></a>

```java
public DatabaseServiceInstanceDatabaseConfiguration getDatabaseConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---

##### `defaultAccessRulesInput`<sup>Optional</sup> <a name="defaultAccessRulesInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput"></a>

```java
public DatabaseServiceInstanceDefaultAccessRules getDefaultAccessRulesInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `highPerformanceStorageInput`<sup>Optional</sup> <a name="highPerformanceStorageInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput"></a>

```java
public java.lang.Object getHighPerformanceStorageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hybridDisasterRecoveryInput`<sup>Optional</sup> <a name="hybridDisasterRecoveryInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput"></a>

```java
public DatabaseServiceInstanceHybridDisasterRecovery getHybridDisasterRecoveryInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instantiateFromBackupInput`<sup>Optional</sup> <a name="instantiateFromBackupInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput"></a>

```java
public DatabaseServiceInstanceInstantiateFromBackup getInstantiateFromBackupInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `ipReservationsInput`<sup>Optional</sup> <a name="ipReservationsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput"></a>

```java
public java.util.List<java.lang.String> getIpReservationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `standbyInput`<sup>Optional</sup> <a name="standbyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput"></a>

```java
public DatabaseServiceInstanceStandby getStandbyInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput"></a>

```java
public java.lang.String getSubscriptionTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `bringYourOwnLicense`<sup>Required</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense"></a>

```java
public java.lang.Object getBringYourOwnLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `highPerformanceStorage`<sup>Required</sup> <a name="highPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage"></a>

```java
public java.lang.Object getHighPerformanceStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `ipReservations`<sup>Required</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseServiceInstanceBackups <a name="DatabaseServiceInstanceBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceBackups;

DatabaseServiceInstanceBackups.builder()
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
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing">createIfMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `createIfMissing`<sup>Optional</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing"></a>

```java
public java.lang.Object getCreateIfMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}.

---

### DatabaseServiceInstanceConfig <a name="DatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceConfig;

DatabaseServiceInstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseConfiguration(DatabaseServiceInstanceDatabaseConfiguration)
    .edition(java.lang.String)
    .name(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKey(java.lang.String)
    .subscriptionType(java.lang.String)
    .version(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .backups(DatabaseServiceInstanceBackups)
//  .bringYourOwnLicense(java.lang.Boolean)
//  .bringYourOwnLicense(IResolvable)
//  .defaultAccessRules(DatabaseServiceInstanceDefaultAccessRules)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .highPerformanceStorage(java.lang.Boolean)
//  .highPerformanceStorage(IResolvable)
//  .hybridDisasterRecovery(DatabaseServiceInstanceHybridDisasterRecovery)
//  .id(java.lang.String)
//  .instantiateFromBackup(DatabaseServiceInstanceInstantiateFromBackup)
//  .ipNetwork(java.lang.String)
//  .ipReservations(java.util.List<java.lang.String>)
//  .level(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .standby(DatabaseServiceInstanceStandby)
//  .subnet(java.lang.String)
//  .timeouts(DatabaseServiceInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration">databaseConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | database_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules">defaultAccessRules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | default_access_rules block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage">highPerformanceStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery">hybridDisasterRecovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | hybrid_disaster_recovery block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup">instantiateFromBackup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | instantiate_from_backup block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | standby block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration"></a>

```java
public DatabaseServiceInstanceDatabaseConfiguration getDatabaseConfiguration();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

database_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}.

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups"></a>

```java
public DatabaseServiceInstanceBackups getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}

---

##### `bringYourOwnLicense`<sup>Optional</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense"></a>

```java
public java.lang.Object getBringYourOwnLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}.

---

##### `defaultAccessRules`<sup>Optional</sup> <a name="defaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules"></a>

```java
public DatabaseServiceInstanceDefaultAccessRules getDefaultAccessRules();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

default_access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}.

---

##### `highPerformanceStorage`<sup>Optional</sup> <a name="highPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage"></a>

```java
public java.lang.Object getHighPerformanceStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}.

---

##### `hybridDisasterRecovery`<sup>Optional</sup> <a name="hybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery"></a>

```java
public DatabaseServiceInstanceHybridDisasterRecovery getHybridDisasterRecovery();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

hybrid_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instantiateFromBackup`<sup>Optional</sup> <a name="instantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup"></a>

```java
public DatabaseServiceInstanceInstantiateFromBackup getInstantiateFromBackup();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

instantiate_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}.

---

##### `ipReservations`<sup>Optional</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}.

---

##### `standby`<sup>Optional</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby"></a>

```java
public DatabaseServiceInstanceStandby getStandby();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

standby block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts"></a>

```java
public DatabaseServiceInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timeouts DatabaseServiceInstance#timeouts}

---

### DatabaseServiceInstanceDatabaseConfiguration <a name="DatabaseServiceInstanceDatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceDatabaseConfiguration;

DatabaseServiceInstanceDatabaseConfiguration.builder()
    .adminPassword(java.lang.String)
    .usableStorage(java.lang.Number)
//  .backupDestination(java.lang.String)
//  .backupStorageVolumeSize(java.lang.Number)
//  .characterSet(java.lang.String)
//  .dataStorageVolumeSize(java.lang.Number)
//  .dbDemo(java.lang.String)
//  .disasterRecovery(java.lang.Boolean)
//  .disasterRecovery(IResolvable)
//  .failoverDatabase(java.lang.Boolean)
//  .failoverDatabase(IResolvable)
//  .goldenGate(java.lang.Boolean)
//  .goldenGate(IResolvable)
//  .isRac(java.lang.Boolean)
//  .isRac(IResolvable)
//  .nationalCharacterSet(java.lang.String)
//  .pdbName(java.lang.String)
//  .sid(java.lang.String)
//  .snapshotName(java.lang.String)
//  .sourceServiceName(java.lang.String)
//  .timezone(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage">usableStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize">backupStorageVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize">dataStorageVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo">dbDemo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery">disasterRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase">failoverDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate">goldenGate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac">isRac</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid">sid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}.

---

##### `usableStorage`<sup>Required</sup> <a name="usableStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage"></a>

```java
public java.lang.Number getUsableStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}.

---

##### `backupStorageVolumeSize`<sup>Optional</sup> <a name="backupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize"></a>

```java
public java.lang.Number getBackupStorageVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}.

---

##### `dataStorageVolumeSize`<sup>Optional</sup> <a name="dataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize"></a>

```java
public java.lang.Number getDataStorageVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}.

---

##### `dbDemo`<sup>Optional</sup> <a name="dbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo"></a>

```java
public java.lang.String getDbDemo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}.

---

##### `disasterRecovery`<sup>Optional</sup> <a name="disasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery"></a>

```java
public java.lang.Object getDisasterRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}.

---

##### `failoverDatabase`<sup>Optional</sup> <a name="failoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase"></a>

```java
public java.lang.Object getFailoverDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}.

---

##### `goldenGate`<sup>Optional</sup> <a name="goldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate"></a>

```java
public java.lang.Object getGoldenGate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}.

---

##### `isRac`<sup>Optional</sup> <a name="isRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac"></a>

```java
public java.lang.Object getIsRac();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}.

---

##### `nationalCharacterSet`<sup>Optional</sup> <a name="nationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}.

---

##### `sourceServiceName`<sup>Optional</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}.

---

### DatabaseServiceInstanceDefaultAccessRules <a name="DatabaseServiceInstanceDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceDefaultAccessRules;

DatabaseServiceInstanceDefaultAccessRules.builder()
//  .enableDbConsole(java.lang.Boolean)
//  .enableDbConsole(IResolvable)
//  .enableDbExpress(java.lang.Boolean)
//  .enableDbExpress(IResolvable)
//  .enableDbListener(java.lang.Boolean)
//  .enableDbListener(IResolvable)
//  .enableEmConsole(java.lang.Boolean)
//  .enableEmConsole(IResolvable)
//  .enableHttp(java.lang.Boolean)
//  .enableHttp(IResolvable)
//  .enableHttpSsl(java.lang.Boolean)
//  .enableHttpSsl(IResolvable)
//  .enableRacDbListener(java.lang.Boolean)
//  .enableRacDbListener(IResolvable)
//  .enableRacOns(java.lang.Boolean)
//  .enableRacOns(IResolvable)
//  .enableScanListener(java.lang.Boolean)
//  .enableScanListener(IResolvable)
//  .enableSsh(java.lang.Boolean)
//  .enableSsh(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole">enableDbConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress">enableDbExpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener">enableDbListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole">enableEmConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp">enableHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl">enableHttpSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener">enableRacDbListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns">enableRacOns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener">enableScanListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh">enableSsh</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}. |

---

##### `enableDbConsole`<sup>Optional</sup> <a name="enableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole"></a>

```java
public java.lang.Object getEnableDbConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}.

---

##### `enableDbExpress`<sup>Optional</sup> <a name="enableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress"></a>

```java
public java.lang.Object getEnableDbExpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}.

---

##### `enableDbListener`<sup>Optional</sup> <a name="enableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener"></a>

```java
public java.lang.Object getEnableDbListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}.

---

##### `enableEmConsole`<sup>Optional</sup> <a name="enableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole"></a>

```java
public java.lang.Object getEnableEmConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}.

---

##### `enableHttp`<sup>Optional</sup> <a name="enableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp"></a>

```java
public java.lang.Object getEnableHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}.

---

##### `enableHttpSsl`<sup>Optional</sup> <a name="enableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl"></a>

```java
public java.lang.Object getEnableHttpSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}.

---

##### `enableRacDbListener`<sup>Optional</sup> <a name="enableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener"></a>

```java
public java.lang.Object getEnableRacDbListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}.

---

##### `enableRacOns`<sup>Optional</sup> <a name="enableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns"></a>

```java
public java.lang.Object getEnableRacOns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}.

---

##### `enableScanListener`<sup>Optional</sup> <a name="enableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener"></a>

```java
public java.lang.Object getEnableScanListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}.

---

##### `enableSsh`<sup>Optional</sup> <a name="enableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh"></a>

```java
public java.lang.Object getEnableSsh();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}.

---

### DatabaseServiceInstanceHybridDisasterRecovery <a name="DatabaseServiceInstanceHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceHybridDisasterRecovery;

DatabaseServiceInstanceHybridDisasterRecovery.builder()
    .cloudStorageContainer(java.lang.String)
//  .cloudStoragePassword(java.lang.String)
//  .cloudStorageUsername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

### DatabaseServiceInstanceInstantiateFromBackup <a name="DatabaseServiceInstanceInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceInstantiateFromBackup;

DatabaseServiceInstanceInstantiateFromBackup.builder()
    .cloudStorageContainer(java.lang.String)
    .databaseId(java.lang.String)
//  .cloudStoragePassword(java.lang.String)
//  .cloudStorageUsername(java.lang.String)
//  .decryptionKey(java.lang.String)
//  .onPremise(java.lang.Boolean)
//  .onPremise(IResolvable)
//  .serviceId(java.lang.String)
//  .walletFileContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey">decryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise">onPremise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent">walletFileContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `decryptionKey`<sup>Optional</sup> <a name="decryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey"></a>

```java
public java.lang.String getDecryptionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}.

---

##### `onPremise`<sup>Optional</sup> <a name="onPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise"></a>

```java
public java.lang.Object getOnPremise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}.

---

##### `walletFileContent`<sup>Optional</sup> <a name="walletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent"></a>

```java
public java.lang.String getWalletFileContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}.

---

### DatabaseServiceInstanceStandby <a name="DatabaseServiceInstanceStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceStandby;

DatabaseServiceInstanceStandby.builder()
    .availabilityDomain(java.lang.String)
    .subnet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

### DatabaseServiceInstanceTimeouts <a name="DatabaseServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceTimeouts;

DatabaseServiceInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseServiceInstanceBackupsOutputReference <a name="DatabaseServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceBackupsOutputReference;

new DatabaseServiceInstanceBackupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing">resetCreateIfMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```java
public void resetCloudStoragePassword()
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```java
public void resetCloudStorageUsername()
```

##### `resetCreateIfMissing` <a name="resetCreateIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```java
public void resetCreateIfMissing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput">createIfMissingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing">createIfMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```java
public java.lang.String getCloudStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```java
public java.lang.String getCloudStoragePasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```java
public java.lang.String getCloudStorageUsernameInput();
```

- *Type:* java.lang.String

---

##### `createIfMissingInput`<sup>Optional</sup> <a name="createIfMissingInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```java
public java.lang.Object getCreateIfMissingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

---

##### `createIfMissing`<sup>Required</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```java
public java.lang.Object getCreateIfMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceBackups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---


### DatabaseServiceInstanceDatabaseConfigurationOutputReference <a name="DatabaseServiceInstanceDatabaseConfigurationOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceDatabaseConfigurationOutputReference;

new DatabaseServiceInstanceDatabaseConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination">resetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize">resetBackupStorageVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize">resetDataStorageVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo">resetDbDemo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery">resetDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase">resetFailoverDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate">resetGoldenGate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac">resetIsRac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet">resetNationalCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName">resetPdbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid">resetSid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName">resetSourceServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupDestination` <a name="resetBackupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination"></a>

```java
public void resetBackupDestination()
```

##### `resetBackupStorageVolumeSize` <a name="resetBackupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize"></a>

```java
public void resetBackupStorageVolumeSize()
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetDataStorageVolumeSize` <a name="resetDataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize"></a>

```java
public void resetDataStorageVolumeSize()
```

##### `resetDbDemo` <a name="resetDbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo"></a>

```java
public void resetDbDemo()
```

##### `resetDisasterRecovery` <a name="resetDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery"></a>

```java
public void resetDisasterRecovery()
```

##### `resetFailoverDatabase` <a name="resetFailoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase"></a>

```java
public void resetFailoverDatabase()
```

##### `resetGoldenGate` <a name="resetGoldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate"></a>

```java
public void resetGoldenGate()
```

##### `resetIsRac` <a name="resetIsRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac"></a>

```java
public void resetIsRac()
```

##### `resetNationalCharacterSet` <a name="resetNationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet"></a>

```java
public void resetNationalCharacterSet()
```

##### `resetPdbName` <a name="resetPdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName"></a>

```java
public void resetPdbName()
```

##### `resetSid` <a name="resetSid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid"></a>

```java
public void resetSid()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSourceServiceName` <a name="resetSourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName"></a>

```java
public void resetSourceServiceName()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput">backupDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput">backupStorageVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput">dataStorageVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput">dbDemoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput">disasterRecoveryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput">failoverDatabaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput">goldenGateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput">isRacInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput">nationalCharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput">sidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput">sourceServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput">usableStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize">backupStorageVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize">dataStorageVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo">dbDemo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery">disasterRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase">failoverDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate">goldenGate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac">isRac</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage">usableStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `backupDestinationInput`<sup>Optional</sup> <a name="backupDestinationInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput"></a>

```java
public java.lang.String getBackupDestinationInput();
```

- *Type:* java.lang.String

---

##### `backupStorageVolumeSizeInput`<sup>Optional</sup> <a name="backupStorageVolumeSizeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput"></a>

```java
public java.lang.Number getBackupStorageVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `dataStorageVolumeSizeInput`<sup>Optional</sup> <a name="dataStorageVolumeSizeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput"></a>

```java
public java.lang.Number getDataStorageVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `dbDemoInput`<sup>Optional</sup> <a name="dbDemoInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput"></a>

```java
public java.lang.String getDbDemoInput();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryInput`<sup>Optional</sup> <a name="disasterRecoveryInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput"></a>

```java
public java.lang.Object getDisasterRecoveryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverDatabaseInput`<sup>Optional</sup> <a name="failoverDatabaseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput"></a>

```java
public java.lang.Object getFailoverDatabaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `goldenGateInput`<sup>Optional</sup> <a name="goldenGateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput"></a>

```java
public java.lang.Object getGoldenGateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRacInput`<sup>Optional</sup> <a name="isRacInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput"></a>

```java
public java.lang.Object getIsRacInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nationalCharacterSetInput`<sup>Optional</sup> <a name="nationalCharacterSetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput"></a>

```java
public java.lang.String getNationalCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput"></a>

```java
public java.lang.String getSidInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `sourceServiceNameInput`<sup>Optional</sup> <a name="sourceServiceNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput"></a>

```java
public java.lang.String getSourceServiceNameInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usableStorageInput`<sup>Optional</sup> <a name="usableStorageInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput"></a>

```java
public java.lang.Number getUsableStorageInput();
```

- *Type:* java.lang.Number

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `backupDestination`<sup>Required</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

---

##### `backupStorageVolumeSize`<sup>Required</sup> <a name="backupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize"></a>

```java
public java.lang.Number getBackupStorageVolumeSize();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `dataStorageVolumeSize`<sup>Required</sup> <a name="dataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize"></a>

```java
public java.lang.Number getDataStorageVolumeSize();
```

- *Type:* java.lang.Number

---

##### `dbDemo`<sup>Required</sup> <a name="dbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo"></a>

```java
public java.lang.String getDbDemo();
```

- *Type:* java.lang.String

---

##### `disasterRecovery`<sup>Required</sup> <a name="disasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery"></a>

```java
public java.lang.Object getDisasterRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverDatabase`<sup>Required</sup> <a name="failoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase"></a>

```java
public java.lang.Object getFailoverDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `goldenGate`<sup>Required</sup> <a name="goldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate"></a>

```java
public java.lang.Object getGoldenGate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRac`<sup>Required</sup> <a name="isRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac"></a>

```java
public java.lang.Object getIsRac();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `sourceServiceName`<sup>Required</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usableStorage`<sup>Required</sup> <a name="usableStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage"></a>

```java
public java.lang.Number getUsableStorage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceDatabaseConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---


### DatabaseServiceInstanceDefaultAccessRulesOutputReference <a name="DatabaseServiceInstanceDefaultAccessRulesOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceDefaultAccessRulesOutputReference;

new DatabaseServiceInstanceDefaultAccessRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole">resetEnableDbConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress">resetEnableDbExpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener">resetEnableDbListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole">resetEnableEmConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp">resetEnableHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl">resetEnableHttpSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener">resetEnableRacDbListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns">resetEnableRacOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener">resetEnableScanListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh">resetEnableSsh</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableDbConsole` <a name="resetEnableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole"></a>

```java
public void resetEnableDbConsole()
```

##### `resetEnableDbExpress` <a name="resetEnableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress"></a>

```java
public void resetEnableDbExpress()
```

##### `resetEnableDbListener` <a name="resetEnableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener"></a>

```java
public void resetEnableDbListener()
```

##### `resetEnableEmConsole` <a name="resetEnableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole"></a>

```java
public void resetEnableEmConsole()
```

##### `resetEnableHttp` <a name="resetEnableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp"></a>

```java
public void resetEnableHttp()
```

##### `resetEnableHttpSsl` <a name="resetEnableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl"></a>

```java
public void resetEnableHttpSsl()
```

##### `resetEnableRacDbListener` <a name="resetEnableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener"></a>

```java
public void resetEnableRacDbListener()
```

##### `resetEnableRacOns` <a name="resetEnableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns"></a>

```java
public void resetEnableRacOns()
```

##### `resetEnableScanListener` <a name="resetEnableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener"></a>

```java
public void resetEnableScanListener()
```

##### `resetEnableSsh` <a name="resetEnableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh"></a>

```java
public void resetEnableSsh()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput">enableDbConsoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput">enableDbExpressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput">enableDbListenerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput">enableEmConsoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput">enableHttpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput">enableHttpSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput">enableRacDbListenerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput">enableRacOnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput">enableScanListenerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput">enableSshInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole">enableDbConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress">enableDbExpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener">enableDbListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole">enableEmConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp">enableHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl">enableHttpSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener">enableRacDbListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns">enableRacOns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener">enableScanListener</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh">enableSsh</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableDbConsoleInput`<sup>Optional</sup> <a name="enableDbConsoleInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput"></a>

```java
public java.lang.Object getEnableDbConsoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDbExpressInput`<sup>Optional</sup> <a name="enableDbExpressInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput"></a>

```java
public java.lang.Object getEnableDbExpressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDbListenerInput`<sup>Optional</sup> <a name="enableDbListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput"></a>

```java
public java.lang.Object getEnableDbListenerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEmConsoleInput`<sup>Optional</sup> <a name="enableEmConsoleInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput"></a>

```java
public java.lang.Object getEnableEmConsoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpInput`<sup>Optional</sup> <a name="enableHttpInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput"></a>

```java
public java.lang.Object getEnableHttpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpSslInput`<sup>Optional</sup> <a name="enableHttpSslInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput"></a>

```java
public java.lang.Object getEnableHttpSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableRacDbListenerInput`<sup>Optional</sup> <a name="enableRacDbListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput"></a>

```java
public java.lang.Object getEnableRacDbListenerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableRacOnsInput`<sup>Optional</sup> <a name="enableRacOnsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput"></a>

```java
public java.lang.Object getEnableRacOnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableScanListenerInput`<sup>Optional</sup> <a name="enableScanListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput"></a>

```java
public java.lang.Object getEnableScanListenerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSshInput`<sup>Optional</sup> <a name="enableSshInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput"></a>

```java
public java.lang.Object getEnableSshInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDbConsole`<sup>Required</sup> <a name="enableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole"></a>

```java
public java.lang.Object getEnableDbConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDbExpress`<sup>Required</sup> <a name="enableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress"></a>

```java
public java.lang.Object getEnableDbExpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDbListener`<sup>Required</sup> <a name="enableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener"></a>

```java
public java.lang.Object getEnableDbListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEmConsole`<sup>Required</sup> <a name="enableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole"></a>

```java
public java.lang.Object getEnableEmConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp`<sup>Required</sup> <a name="enableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp"></a>

```java
public java.lang.Object getEnableHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpSsl`<sup>Required</sup> <a name="enableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl"></a>

```java
public java.lang.Object getEnableHttpSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableRacDbListener`<sup>Required</sup> <a name="enableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener"></a>

```java
public java.lang.Object getEnableRacDbListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableRacOns`<sup>Required</sup> <a name="enableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns"></a>

```java
public java.lang.Object getEnableRacOns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableScanListener`<sup>Required</sup> <a name="enableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener"></a>

```java
public java.lang.Object getEnableScanListener();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSsh`<sup>Required</sup> <a name="enableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh"></a>

```java
public java.lang.Object getEnableSsh();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceDefaultAccessRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---


### DatabaseServiceInstanceHybridDisasterRecoveryOutputReference <a name="DatabaseServiceInstanceHybridDisasterRecoveryOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference;

new DatabaseServiceInstanceHybridDisasterRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword"></a>

```java
public void resetCloudStoragePassword()
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername"></a>

```java
public void resetCloudStorageUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput"></a>

```java
public java.lang.String getCloudStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput"></a>

```java
public java.lang.String getCloudStoragePasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput"></a>

```java
public java.lang.String getCloudStorageUsernameInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceHybridDisasterRecovery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---


### DatabaseServiceInstanceInstantiateFromBackupOutputReference <a name="DatabaseServiceInstanceInstantiateFromBackupOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceInstantiateFromBackupOutputReference;

new DatabaseServiceInstanceInstantiateFromBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey">resetDecryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise">resetOnPremise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent">resetWalletFileContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword"></a>

```java
public void resetCloudStoragePassword()
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername"></a>

```java
public void resetCloudStorageUsername()
```

##### `resetDecryptionKey` <a name="resetDecryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey"></a>

```java
public void resetDecryptionKey()
```

##### `resetOnPremise` <a name="resetOnPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise"></a>

```java
public void resetOnPremise()
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId"></a>

```java
public void resetServiceId()
```

##### `resetWalletFileContent` <a name="resetWalletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent"></a>

```java
public void resetWalletFileContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput">decryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput">onPremiseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput">walletFileContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey">decryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise">onPremise</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent">walletFileContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput"></a>

```java
public java.lang.String getCloudStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput"></a>

```java
public java.lang.String getCloudStoragePasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput"></a>

```java
public java.lang.String getCloudStorageUsernameInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `decryptionKeyInput`<sup>Optional</sup> <a name="decryptionKeyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput"></a>

```java
public java.lang.String getDecryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `onPremiseInput`<sup>Optional</sup> <a name="onPremiseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput"></a>

```java
public java.lang.Object getOnPremiseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `walletFileContentInput`<sup>Optional</sup> <a name="walletFileContentInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput"></a>

```java
public java.lang.String getWalletFileContentInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `decryptionKey`<sup>Required</sup> <a name="decryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey"></a>

```java
public java.lang.String getDecryptionKey();
```

- *Type:* java.lang.String

---

##### `onPremise`<sup>Required</sup> <a name="onPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise"></a>

```java
public java.lang.Object getOnPremise();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `walletFileContent`<sup>Required</sup> <a name="walletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent"></a>

```java
public java.lang.String getWalletFileContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceInstantiateFromBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---


### DatabaseServiceInstanceStandbyOutputReference <a name="DatabaseServiceInstanceStandbyOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceStandbyOutputReference;

new DatabaseServiceInstanceStandbyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue"></a>

```java
public DatabaseServiceInstanceStandby getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---


### DatabaseServiceInstanceTimeoutsOutputReference <a name="DatabaseServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.database_service_instance.DatabaseServiceInstanceTimeoutsOutputReference;

new DatabaseServiceInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

---



