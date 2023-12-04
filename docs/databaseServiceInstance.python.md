# `databaseServiceInstance` Submodule <a name="`databaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.databaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseServiceInstance <a name="DatabaseServiceInstance" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_configuration: DatabaseServiceInstanceDatabaseConfiguration,
  edition: str,
  name: str,
  shape: str,
  ssh_public_key: str,
  subscription_type: str,
  version: str,
  availability_domain: str = None,
  backups: DatabaseServiceInstanceBackups = None,
  bring_your_own_license: typing.Union[bool, IResolvable] = None,
  default_access_rules: DatabaseServiceInstanceDefaultAccessRules = None,
  description: str = None,
  desired_state: str = None,
  high_performance_storage: typing.Union[bool, IResolvable] = None,
  hybrid_disaster_recovery: DatabaseServiceInstanceHybridDisasterRecovery = None,
  id: str = None,
  instantiate_from_backup: DatabaseServiceInstanceInstantiateFromBackup = None,
  ip_network: str = None,
  ip_reservations: typing.List[str] = None,
  level: str = None,
  notification_email: str = None,
  region: str = None,
  standby: DatabaseServiceInstanceStandby = None,
  subnet: str = None,
  timeouts: DatabaseServiceInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.databaseConfiguration">database_configuration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | database_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.bringYourOwnLicense">bring_your_own_license</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.defaultAccessRules">default_access_rules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | default_access_rules block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.highPerformanceStorage">high_performance_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.hybridDisasterRecovery">hybrid_disaster_recovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | hybrid_disaster_recovery block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.instantiateFromBackup">instantiate_from_backup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | instantiate_from_backup block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipReservations">ip_reservations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | standby block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subnet">subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.databaseConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

database_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.edition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}.

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.sshPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}.

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subscriptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.backups"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}

---

##### `bring_your_own_license`<sup>Optional</sup> <a name="bring_your_own_license" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.bringYourOwnLicense"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}.

---

##### `default_access_rules`<sup>Optional</sup> <a name="default_access_rules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.defaultAccessRules"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

default_access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}.

---

##### `high_performance_storage`<sup>Optional</sup> <a name="high_performance_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.highPerformanceStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}.

---

##### `hybrid_disaster_recovery`<sup>Optional</sup> <a name="hybrid_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.hybridDisasterRecovery"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

hybrid_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instantiate_from_backup`<sup>Optional</sup> <a name="instantiate_from_backup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.instantiateFromBackup"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

instantiate_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}.

---

##### `ip_reservations`<sup>Optional</sup> <a name="ip_reservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.ipReservations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}.

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.notificationEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}.

---

##### `standby`<sup>Optional</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.standby"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

standby block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.subnet"></a>

- *Type:* str

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
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups">put_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration">put_database_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules">put_default_access_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery">put_hybrid_disaster_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup">put_instantiate_from_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby">put_standby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups">reset_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense">reset_bring_your_own_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules">reset_default_access_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage">reset_high_performance_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery">reset_hybrid_disaster_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup">reset_instantiate_from_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork">reset_ip_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations">reset_ip_reservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail">reset_notification_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby">reset_standby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backups` <a name="put_backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups"></a>

```python
def put_backups(
  cloud_storage_container: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None,
  create_if_missing: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.cloudStorageContainer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

###### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.cloudStoragePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

###### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.cloudStorageUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

###### `create_if_missing`<sup>Optional</sup> <a name="create_if_missing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.createIfMissing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}.

---

##### `put_database_configuration` <a name="put_database_configuration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration"></a>

```python
def put_database_configuration(
  admin_password: str,
  usable_storage: typing.Union[int, float],
  backup_destination: str = None,
  backup_storage_volume_size: typing.Union[int, float] = None,
  character_set: str = None,
  data_storage_volume_size: typing.Union[int, float] = None,
  db_demo: str = None,
  disaster_recovery: typing.Union[bool, IResolvable] = None,
  failover_database: typing.Union[bool, IResolvable] = None,
  golden_gate: typing.Union[bool, IResolvable] = None,
  is_rac: typing.Union[bool, IResolvable] = None,
  national_character_set: str = None,
  pdb_name: str = None,
  sid: str = None,
  snapshot_name: str = None,
  source_service_name: str = None,
  timezone: str = None,
  type: str = None
) -> None
```

###### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}.

---

###### `usable_storage`<sup>Required</sup> <a name="usable_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.usableStorage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}.

---

###### `backup_destination`<sup>Optional</sup> <a name="backup_destination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.backupDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}.

---

###### `backup_storage_volume_size`<sup>Optional</sup> <a name="backup_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.backupStorageVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}.

---

###### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}.

---

###### `data_storage_volume_size`<sup>Optional</sup> <a name="data_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.dataStorageVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}.

---

###### `db_demo`<sup>Optional</sup> <a name="db_demo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.dbDemo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}.

---

###### `disaster_recovery`<sup>Optional</sup> <a name="disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.disasterRecovery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}.

---

###### `failover_database`<sup>Optional</sup> <a name="failover_database" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.failoverDatabase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}.

---

###### `golden_gate`<sup>Optional</sup> <a name="golden_gate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.goldenGate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}.

---

###### `is_rac`<sup>Optional</sup> <a name="is_rac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.isRac"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}.

---

###### `national_character_set`<sup>Optional</sup> <a name="national_character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.nationalCharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}.

---

###### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.pdbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}.

---

###### `sid`<sup>Optional</sup> <a name="sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.sid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}.

---

###### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.snapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}.

---

###### `source_service_name`<sup>Optional</sup> <a name="source_service_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.sourceServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}.

---

##### `put_default_access_rules` <a name="put_default_access_rules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules"></a>

```python
def put_default_access_rules(
  enable_db_console: typing.Union[bool, IResolvable] = None,
  enable_db_express: typing.Union[bool, IResolvable] = None,
  enable_db_listener: typing.Union[bool, IResolvable] = None,
  enable_em_console: typing.Union[bool, IResolvable] = None,
  enable_http: typing.Union[bool, IResolvable] = None,
  enable_http_ssl: typing.Union[bool, IResolvable] = None,
  enable_rac_db_listener: typing.Union[bool, IResolvable] = None,
  enable_rac_ons: typing.Union[bool, IResolvable] = None,
  enable_scan_listener: typing.Union[bool, IResolvable] = None,
  enable_ssh: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_db_console`<sup>Optional</sup> <a name="enable_db_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableDbConsole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}.

---

###### `enable_db_express`<sup>Optional</sup> <a name="enable_db_express" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableDbExpress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}.

---

###### `enable_db_listener`<sup>Optional</sup> <a name="enable_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableDbListener"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}.

---

###### `enable_em_console`<sup>Optional</sup> <a name="enable_em_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableEmConsole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}.

---

###### `enable_http`<sup>Optional</sup> <a name="enable_http" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableHttp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}.

---

###### `enable_http_ssl`<sup>Optional</sup> <a name="enable_http_ssl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableHttpSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}.

---

###### `enable_rac_db_listener`<sup>Optional</sup> <a name="enable_rac_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableRacDbListener"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}.

---

###### `enable_rac_ons`<sup>Optional</sup> <a name="enable_rac_ons" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableRacOns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}.

---

###### `enable_scan_listener`<sup>Optional</sup> <a name="enable_scan_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableScanListener"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}.

---

###### `enable_ssh`<sup>Optional</sup> <a name="enable_ssh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.enableSsh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}.

---

##### `put_hybrid_disaster_recovery` <a name="put_hybrid_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery"></a>

```python
def put_hybrid_disaster_recovery(
  cloud_storage_container: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None
) -> None
```

###### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery.parameter.cloudStorageContainer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

###### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery.parameter.cloudStoragePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

###### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery.parameter.cloudStorageUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `put_instantiate_from_backup` <a name="put_instantiate_from_backup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup"></a>

```python
def put_instantiate_from_backup(
  cloud_storage_container: str,
  database_id: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None,
  decryption_key: str = None,
  on_premise: typing.Union[bool, IResolvable] = None,
  service_id: str = None,
  wallet_file_content: str = None
) -> None
```

###### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.cloudStorageContainer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

###### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}.

---

###### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.cloudStoragePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

###### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.cloudStorageUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

###### `decryption_key`<sup>Optional</sup> <a name="decryption_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.decryptionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}.

---

###### `on_premise`<sup>Optional</sup> <a name="on_premise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.onPremise"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}.

---

###### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}.

---

###### `wallet_file_content`<sup>Optional</sup> <a name="wallet_file_content" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.walletFileContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}.

---

##### `put_standby` <a name="put_standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby"></a>

```python
def put_standby(
  availability_domain: str,
  subnet: str
) -> None
```

###### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

###### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby.parameter.subnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}.

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_backups` <a name="reset_backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups"></a>

```python
def reset_backups() -> None
```

##### `reset_bring_your_own_license` <a name="reset_bring_your_own_license" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense"></a>

```python
def reset_bring_your_own_license() -> None
```

##### `reset_default_access_rules` <a name="reset_default_access_rules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules"></a>

```python
def reset_default_access_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_high_performance_storage` <a name="reset_high_performance_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage"></a>

```python
def reset_high_performance_storage() -> None
```

##### `reset_hybrid_disaster_recovery` <a name="reset_hybrid_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery"></a>

```python
def reset_hybrid_disaster_recovery() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instantiate_from_backup` <a name="reset_instantiate_from_backup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup"></a>

```python
def reset_instantiate_from_backup() -> None
```

##### `reset_ip_network` <a name="reset_ip_network" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork"></a>

```python
def reset_ip_network() -> None
```

##### `reset_ip_reservations` <a name="reset_ip_reservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations"></a>

```python
def reset_ip_reservations() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_notification_email` <a name="reset_notification_email" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail"></a>

```python
def reset_notification_email() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_standby` <a name="reset_standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby"></a>

```python
def reset_standby() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstance.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseServiceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName">compute_site_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration">database_configuration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl">dbaas_monitor_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules">default_access_rules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl">em_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl">glassfish_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery">hybrid_disaster_recovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain">identity_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup">instantiate_from_backup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput">backups_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput">bring_your_own_license_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput">database_configuration_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput">default_access_rules_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput">high_performance_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput">hybrid_disaster_recovery_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput">instantiate_from_backup_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput">ip_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput">ip_reservations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput">notification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput">ssh_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput">standby_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput">subscription_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense">bring_your_own_license</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage">high_performance_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations">ip_reservations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail">notification_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups"></a>

```python
backups: DatabaseServiceInstanceBackupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a>

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

---

##### `compute_site_name`<sup>Required</sup> <a name="compute_site_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName"></a>

```python
compute_site_name: str
```

- *Type:* str

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration"></a>

```python
database_configuration: DatabaseServiceInstanceDatabaseConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a>

---

##### `dbaas_monitor_url`<sup>Required</sup> <a name="dbaas_monitor_url" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl"></a>

```python
dbaas_monitor_url: str
```

- *Type:* str

---

##### `default_access_rules`<sup>Required</sup> <a name="default_access_rules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules"></a>

```python
default_access_rules: DatabaseServiceInstanceDefaultAccessRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a>

---

##### `em_url`<sup>Required</sup> <a name="em_url" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl"></a>

```python
em_url: str
```

- *Type:* str

---

##### `glassfish_url`<sup>Required</sup> <a name="glassfish_url" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl"></a>

```python
glassfish_url: str
```

- *Type:* str

---

##### `hybrid_disaster_recovery`<sup>Required</sup> <a name="hybrid_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery"></a>

```python
hybrid_disaster_recovery: DatabaseServiceInstanceHybridDisasterRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a>

---

##### `identity_domain`<sup>Required</sup> <a name="identity_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain"></a>

```python
identity_domain: str
```

- *Type:* str

---

##### `instantiate_from_backup`<sup>Required</sup> <a name="instantiate_from_backup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup"></a>

```python
instantiate_from_backup: DatabaseServiceInstanceInstantiateFromBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a>

---

##### `standby`<sup>Required</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby"></a>

```python
standby: DatabaseServiceInstanceStandbyOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts"></a>

```python
timeouts: DatabaseServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backups_input`<sup>Optional</sup> <a name="backups_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput"></a>

```python
backups_input: DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---

##### `bring_your_own_license_input`<sup>Optional</sup> <a name="bring_your_own_license_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput"></a>

```python
bring_your_own_license_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_configuration_input`<sup>Optional</sup> <a name="database_configuration_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput"></a>

```python
database_configuration_input: DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---

##### `default_access_rules_input`<sup>Optional</sup> <a name="default_access_rules_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput"></a>

```python
default_access_rules_input: DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `high_performance_storage_input`<sup>Optional</sup> <a name="high_performance_storage_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput"></a>

```python
high_performance_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hybrid_disaster_recovery_input`<sup>Optional</sup> <a name="hybrid_disaster_recovery_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput"></a>

```python
hybrid_disaster_recovery_input: DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instantiate_from_backup_input`<sup>Optional</sup> <a name="instantiate_from_backup_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput"></a>

```python
instantiate_from_backup_input: DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---

##### `ip_network_input`<sup>Optional</sup> <a name="ip_network_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput"></a>

```python
ip_network_input: str
```

- *Type:* str

---

##### `ip_reservations_input`<sup>Optional</sup> <a name="ip_reservations_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput"></a>

```python
ip_reservations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_email_input`<sup>Optional</sup> <a name="notification_email_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput"></a>

```python
notification_email_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `ssh_public_key_input`<sup>Optional</sup> <a name="ssh_public_key_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput"></a>

```python
ssh_public_key_input: str
```

- *Type:* str

---

##### `standby_input`<sup>Optional</sup> <a name="standby_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput"></a>

```python
standby_input: DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `subscription_type_input`<sup>Optional</sup> <a name="subscription_type_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput"></a>

```python
subscription_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `bring_your_own_license`<sup>Required</sup> <a name="bring_your_own_license" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense"></a>

```python
bring_your_own_license: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `high_performance_storage`<sup>Required</sup> <a name="high_performance_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage"></a>

```python
high_performance_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `ip_reservations`<sup>Required</sup> <a name="ip_reservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations"></a>

```python
ip_reservations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseServiceInstanceBackups <a name="DatabaseServiceInstanceBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceBackups(
  cloud_storage_container: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None,
  create_if_missing: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing">create_if_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}. |

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `create_if_missing`<sup>Optional</sup> <a name="create_if_missing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing"></a>

```python
create_if_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}.

---

### DatabaseServiceInstanceConfig <a name="DatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_configuration: DatabaseServiceInstanceDatabaseConfiguration,
  edition: str,
  name: str,
  shape: str,
  ssh_public_key: str,
  subscription_type: str,
  version: str,
  availability_domain: str = None,
  backups: DatabaseServiceInstanceBackups = None,
  bring_your_own_license: typing.Union[bool, IResolvable] = None,
  default_access_rules: DatabaseServiceInstanceDefaultAccessRules = None,
  description: str = None,
  desired_state: str = None,
  high_performance_storage: typing.Union[bool, IResolvable] = None,
  hybrid_disaster_recovery: DatabaseServiceInstanceHybridDisasterRecovery = None,
  id: str = None,
  instantiate_from_backup: DatabaseServiceInstanceInstantiateFromBackup = None,
  ip_network: str = None,
  ip_reservations: typing.List[str] = None,
  level: str = None,
  notification_email: str = None,
  region: str = None,
  standby: DatabaseServiceInstanceStandby = None,
  subnet: str = None,
  timeouts: DatabaseServiceInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration">database_configuration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | database_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense">bring_your_own_license</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules">default_access_rules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | default_access_rules block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage">high_performance_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery">hybrid_disaster_recovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | hybrid_disaster_recovery block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup">instantiate_from_backup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | instantiate_from_backup block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations">ip_reservations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby">standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | standby block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet">subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration"></a>

```python
database_configuration: DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

database_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}.

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}.

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups"></a>

```python
backups: DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}

---

##### `bring_your_own_license`<sup>Optional</sup> <a name="bring_your_own_license" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense"></a>

```python
bring_your_own_license: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}.

---

##### `default_access_rules`<sup>Optional</sup> <a name="default_access_rules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules"></a>

```python
default_access_rules: DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

default_access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}.

---

##### `high_performance_storage`<sup>Optional</sup> <a name="high_performance_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage"></a>

```python
high_performance_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}.

---

##### `hybrid_disaster_recovery`<sup>Optional</sup> <a name="hybrid_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery"></a>

```python
hybrid_disaster_recovery: DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

hybrid_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instantiate_from_backup`<sup>Optional</sup> <a name="instantiate_from_backup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup"></a>

```python
instantiate_from_backup: DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

instantiate_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}.

---

##### `ip_reservations`<sup>Optional</sup> <a name="ip_reservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations"></a>

```python
ip_reservations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}.

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}.

---

##### `standby`<sup>Optional</sup> <a name="standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby"></a>

```python
standby: DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

standby block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts"></a>

```python
timeouts: DatabaseServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timeouts DatabaseServiceInstance#timeouts}

---

### DatabaseServiceInstanceDatabaseConfiguration <a name="DatabaseServiceInstanceDatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration(
  admin_password: str,
  usable_storage: typing.Union[int, float],
  backup_destination: str = None,
  backup_storage_volume_size: typing.Union[int, float] = None,
  character_set: str = None,
  data_storage_volume_size: typing.Union[int, float] = None,
  db_demo: str = None,
  disaster_recovery: typing.Union[bool, IResolvable] = None,
  failover_database: typing.Union[bool, IResolvable] = None,
  golden_gate: typing.Union[bool, IResolvable] = None,
  is_rac: typing.Union[bool, IResolvable] = None,
  national_character_set: str = None,
  pdb_name: str = None,
  sid: str = None,
  snapshot_name: str = None,
  source_service_name: str = None,
  timezone: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage">usable_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination">backup_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize">backup_storage_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize">data_storage_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo">db_demo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery">disaster_recovery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase">failover_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate">golden_gate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac">is_rac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName">pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid">sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName">source_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}.

---

##### `usable_storage`<sup>Required</sup> <a name="usable_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage"></a>

```python
usable_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}.

---

##### `backup_destination`<sup>Optional</sup> <a name="backup_destination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination"></a>

```python
backup_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}.

---

##### `backup_storage_volume_size`<sup>Optional</sup> <a name="backup_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize"></a>

```python
backup_storage_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}.

---

##### `data_storage_volume_size`<sup>Optional</sup> <a name="data_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize"></a>

```python
data_storage_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}.

---

##### `db_demo`<sup>Optional</sup> <a name="db_demo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo"></a>

```python
db_demo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}.

---

##### `disaster_recovery`<sup>Optional</sup> <a name="disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery"></a>

```python
disaster_recovery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}.

---

##### `failover_database`<sup>Optional</sup> <a name="failover_database" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase"></a>

```python
failover_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}.

---

##### `golden_gate`<sup>Optional</sup> <a name="golden_gate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate"></a>

```python
golden_gate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}.

---

##### `is_rac`<sup>Optional</sup> <a name="is_rac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac"></a>

```python
is_rac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}.

---

##### `national_character_set`<sup>Optional</sup> <a name="national_character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}.

---

##### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid"></a>

```python
sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}.

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}.

---

##### `source_service_name`<sup>Optional</sup> <a name="source_service_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName"></a>

```python
source_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}.

---

### DatabaseServiceInstanceDefaultAccessRules <a name="DatabaseServiceInstanceDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules(
  enable_db_console: typing.Union[bool, IResolvable] = None,
  enable_db_express: typing.Union[bool, IResolvable] = None,
  enable_db_listener: typing.Union[bool, IResolvable] = None,
  enable_em_console: typing.Union[bool, IResolvable] = None,
  enable_http: typing.Union[bool, IResolvable] = None,
  enable_http_ssl: typing.Union[bool, IResolvable] = None,
  enable_rac_db_listener: typing.Union[bool, IResolvable] = None,
  enable_rac_ons: typing.Union[bool, IResolvable] = None,
  enable_scan_listener: typing.Union[bool, IResolvable] = None,
  enable_ssh: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole">enable_db_console</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress">enable_db_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener">enable_db_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole">enable_em_console</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp">enable_http</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl">enable_http_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener">enable_rac_db_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns">enable_rac_ons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener">enable_scan_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh">enable_ssh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}. |

---

##### `enable_db_console`<sup>Optional</sup> <a name="enable_db_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole"></a>

```python
enable_db_console: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}.

---

##### `enable_db_express`<sup>Optional</sup> <a name="enable_db_express" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress"></a>

```python
enable_db_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}.

---

##### `enable_db_listener`<sup>Optional</sup> <a name="enable_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener"></a>

```python
enable_db_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}.

---

##### `enable_em_console`<sup>Optional</sup> <a name="enable_em_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole"></a>

```python
enable_em_console: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}.

---

##### `enable_http`<sup>Optional</sup> <a name="enable_http" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp"></a>

```python
enable_http: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}.

---

##### `enable_http_ssl`<sup>Optional</sup> <a name="enable_http_ssl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl"></a>

```python
enable_http_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}.

---

##### `enable_rac_db_listener`<sup>Optional</sup> <a name="enable_rac_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener"></a>

```python
enable_rac_db_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}.

---

##### `enable_rac_ons`<sup>Optional</sup> <a name="enable_rac_ons" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns"></a>

```python
enable_rac_ons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}.

---

##### `enable_scan_listener`<sup>Optional</sup> <a name="enable_scan_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener"></a>

```python
enable_scan_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}.

---

##### `enable_ssh`<sup>Optional</sup> <a name="enable_ssh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh"></a>

```python
enable_ssh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}.

---

### DatabaseServiceInstanceHybridDisasterRecovery <a name="DatabaseServiceInstanceHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery(
  cloud_storage_container: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

### DatabaseServiceInstanceInstantiateFromBackup <a name="DatabaseServiceInstanceInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup(
  cloud_storage_container: str,
  database_id: str,
  cloud_storage_password: str = None,
  cloud_storage_username: str = None,
  decryption_key: str = None,
  on_premise: typing.Union[bool, IResolvable] = None,
  service_id: str = None,
  wallet_file_content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey">decryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise">on_premise</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent">wallet_file_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}. |

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}.

---

##### `cloud_storage_password`<sup>Optional</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `cloud_storage_username`<sup>Optional</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `decryption_key`<sup>Optional</sup> <a name="decryption_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey"></a>

```python
decryption_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}.

---

##### `on_premise`<sup>Optional</sup> <a name="on_premise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise"></a>

```python
on_premise: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}.

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}.

---

##### `wallet_file_content`<sup>Optional</sup> <a name="wallet_file_content" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent"></a>

```python
wallet_file_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}.

---

### DatabaseServiceInstanceStandby <a name="DatabaseServiceInstanceStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceStandby(
  availability_domain: str,
  subnet: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet">subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

### DatabaseServiceInstanceTimeouts <a name="DatabaseServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseServiceInstanceBackupsOutputReference <a name="DatabaseServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword">reset_cloud_storage_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername">reset_cloud_storage_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing">reset_create_if_missing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_storage_password` <a name="reset_cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```python
def reset_cloud_storage_password() -> None
```

##### `reset_cloud_storage_username` <a name="reset_cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```python
def reset_cloud_storage_username() -> None
```

##### `reset_create_if_missing` <a name="reset_create_if_missing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```python
def reset_create_if_missing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">cloud_storage_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">cloud_storage_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">cloud_storage_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput">create_if_missing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing">create_if_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_container_input`<sup>Optional</sup> <a name="cloud_storage_container_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```python
cloud_storage_container_input: str
```

- *Type:* str

---

##### `cloud_storage_password_input`<sup>Optional</sup> <a name="cloud_storage_password_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```python
cloud_storage_password_input: str
```

- *Type:* str

---

##### `cloud_storage_username_input`<sup>Optional</sup> <a name="cloud_storage_username_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```python
cloud_storage_username_input: str
```

- *Type:* str

---

##### `create_if_missing_input`<sup>Optional</sup> <a name="create_if_missing_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```python
create_if_missing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

---

##### `cloud_storage_password`<sup>Required</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

---

##### `cloud_storage_username`<sup>Required</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

---

##### `create_if_missing`<sup>Required</sup> <a name="create_if_missing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```python
create_if_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---


### DatabaseServiceInstanceDatabaseConfigurationOutputReference <a name="DatabaseServiceInstanceDatabaseConfigurationOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination">reset_backup_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize">reset_backup_storage_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize">reset_data_storage_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo">reset_db_demo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery">reset_disaster_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase">reset_failover_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate">reset_golden_gate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac">reset_is_rac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet">reset_national_character_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName">reset_pdb_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid">reset_sid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName">reset_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName">reset_source_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_destination` <a name="reset_backup_destination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination"></a>

```python
def reset_backup_destination() -> None
```

##### `reset_backup_storage_volume_size` <a name="reset_backup_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize"></a>

```python
def reset_backup_storage_volume_size() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_data_storage_volume_size` <a name="reset_data_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize"></a>

```python
def reset_data_storage_volume_size() -> None
```

##### `reset_db_demo` <a name="reset_db_demo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo"></a>

```python
def reset_db_demo() -> None
```

##### `reset_disaster_recovery` <a name="reset_disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery"></a>

```python
def reset_disaster_recovery() -> None
```

##### `reset_failover_database` <a name="reset_failover_database" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase"></a>

```python
def reset_failover_database() -> None
```

##### `reset_golden_gate` <a name="reset_golden_gate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate"></a>

```python
def reset_golden_gate() -> None
```

##### `reset_is_rac` <a name="reset_is_rac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac"></a>

```python
def reset_is_rac() -> None
```

##### `reset_national_character_set` <a name="reset_national_character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet"></a>

```python
def reset_national_character_set() -> None
```

##### `reset_pdb_name` <a name="reset_pdb_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName"></a>

```python
def reset_pdb_name() -> None
```

##### `reset_sid` <a name="reset_sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid"></a>

```python
def reset_sid() -> None
```

##### `reset_snapshot_name` <a name="reset_snapshot_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName"></a>

```python
def reset_snapshot_name() -> None
```

##### `reset_source_service_name` <a name="reset_source_service_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName"></a>

```python
def reset_source_service_name() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput">backup_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput">backup_storage_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput">data_storage_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput">db_demo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput">disaster_recovery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput">failover_database_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput">golden_gate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput">is_rac_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput">national_character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput">pdb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput">sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput">source_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput">usable_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination">backup_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize">backup_storage_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize">data_storage_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo">db_demo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery">disaster_recovery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase">failover_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate">golden_gate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac">is_rac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName">source_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage">usable_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `backup_destination_input`<sup>Optional</sup> <a name="backup_destination_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput"></a>

```python
backup_destination_input: str
```

- *Type:* str

---

##### `backup_storage_volume_size_input`<sup>Optional</sup> <a name="backup_storage_volume_size_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput"></a>

```python
backup_storage_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `data_storage_volume_size_input`<sup>Optional</sup> <a name="data_storage_volume_size_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput"></a>

```python
data_storage_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_demo_input`<sup>Optional</sup> <a name="db_demo_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput"></a>

```python
db_demo_input: str
```

- *Type:* str

---

##### `disaster_recovery_input`<sup>Optional</sup> <a name="disaster_recovery_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput"></a>

```python
disaster_recovery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_database_input`<sup>Optional</sup> <a name="failover_database_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput"></a>

```python
failover_database_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `golden_gate_input`<sup>Optional</sup> <a name="golden_gate_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput"></a>

```python
golden_gate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_rac_input`<sup>Optional</sup> <a name="is_rac_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput"></a>

```python
is_rac_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `national_character_set_input`<sup>Optional</sup> <a name="national_character_set_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput"></a>

```python
national_character_set_input: str
```

- *Type:* str

---

##### `pdb_name_input`<sup>Optional</sup> <a name="pdb_name_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput"></a>

```python
pdb_name_input: str
```

- *Type:* str

---

##### `sid_input`<sup>Optional</sup> <a name="sid_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput"></a>

```python
sid_input: str
```

- *Type:* str

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `source_service_name_input`<sup>Optional</sup> <a name="source_service_name_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput"></a>

```python
source_service_name_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usable_storage_input`<sup>Optional</sup> <a name="usable_storage_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput"></a>

```python
usable_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `backup_destination`<sup>Required</sup> <a name="backup_destination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination"></a>

```python
backup_destination: str
```

- *Type:* str

---

##### `backup_storage_volume_size`<sup>Required</sup> <a name="backup_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize"></a>

```python
backup_storage_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `data_storage_volume_size`<sup>Required</sup> <a name="data_storage_volume_size" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize"></a>

```python
data_storage_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_demo`<sup>Required</sup> <a name="db_demo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo"></a>

```python
db_demo: str
```

- *Type:* str

---

##### `disaster_recovery`<sup>Required</sup> <a name="disaster_recovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery"></a>

```python
disaster_recovery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_database`<sup>Required</sup> <a name="failover_database" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase"></a>

```python
failover_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `golden_gate`<sup>Required</sup> <a name="golden_gate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate"></a>

```python
golden_gate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_rac`<sup>Required</sup> <a name="is_rac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac"></a>

```python
is_rac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `source_service_name`<sup>Required</sup> <a name="source_service_name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName"></a>

```python
source_service_name: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usable_storage`<sup>Required</sup> <a name="usable_storage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage"></a>

```python
usable_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---


### DatabaseServiceInstanceDefaultAccessRulesOutputReference <a name="DatabaseServiceInstanceDefaultAccessRulesOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole">reset_enable_db_console</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress">reset_enable_db_express</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener">reset_enable_db_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole">reset_enable_em_console</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp">reset_enable_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl">reset_enable_http_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener">reset_enable_rac_db_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns">reset_enable_rac_ons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener">reset_enable_scan_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh">reset_enable_ssh</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_db_console` <a name="reset_enable_db_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole"></a>

```python
def reset_enable_db_console() -> None
```

##### `reset_enable_db_express` <a name="reset_enable_db_express" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress"></a>

```python
def reset_enable_db_express() -> None
```

##### `reset_enable_db_listener` <a name="reset_enable_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener"></a>

```python
def reset_enable_db_listener() -> None
```

##### `reset_enable_em_console` <a name="reset_enable_em_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole"></a>

```python
def reset_enable_em_console() -> None
```

##### `reset_enable_http` <a name="reset_enable_http" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp"></a>

```python
def reset_enable_http() -> None
```

##### `reset_enable_http_ssl` <a name="reset_enable_http_ssl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl"></a>

```python
def reset_enable_http_ssl() -> None
```

##### `reset_enable_rac_db_listener` <a name="reset_enable_rac_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener"></a>

```python
def reset_enable_rac_db_listener() -> None
```

##### `reset_enable_rac_ons` <a name="reset_enable_rac_ons" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns"></a>

```python
def reset_enable_rac_ons() -> None
```

##### `reset_enable_scan_listener` <a name="reset_enable_scan_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener"></a>

```python
def reset_enable_scan_listener() -> None
```

##### `reset_enable_ssh` <a name="reset_enable_ssh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh"></a>

```python
def reset_enable_ssh() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput">enable_db_console_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput">enable_db_express_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput">enable_db_listener_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput">enable_em_console_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput">enable_http_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput">enable_http_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput">enable_rac_db_listener_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput">enable_rac_ons_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput">enable_scan_listener_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput">enable_ssh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole">enable_db_console</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress">enable_db_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener">enable_db_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole">enable_em_console</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp">enable_http</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl">enable_http_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener">enable_rac_db_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns">enable_rac_ons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener">enable_scan_listener</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh">enable_ssh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_db_console_input`<sup>Optional</sup> <a name="enable_db_console_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput"></a>

```python
enable_db_console_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_db_express_input`<sup>Optional</sup> <a name="enable_db_express_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput"></a>

```python
enable_db_express_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_db_listener_input`<sup>Optional</sup> <a name="enable_db_listener_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput"></a>

```python
enable_db_listener_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_em_console_input`<sup>Optional</sup> <a name="enable_em_console_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput"></a>

```python
enable_em_console_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http_input`<sup>Optional</sup> <a name="enable_http_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput"></a>

```python
enable_http_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http_ssl_input`<sup>Optional</sup> <a name="enable_http_ssl_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput"></a>

```python
enable_http_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rac_db_listener_input`<sup>Optional</sup> <a name="enable_rac_db_listener_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput"></a>

```python
enable_rac_db_listener_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rac_ons_input`<sup>Optional</sup> <a name="enable_rac_ons_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput"></a>

```python
enable_rac_ons_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_scan_listener_input`<sup>Optional</sup> <a name="enable_scan_listener_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput"></a>

```python
enable_scan_listener_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ssh_input`<sup>Optional</sup> <a name="enable_ssh_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput"></a>

```python
enable_ssh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_db_console`<sup>Required</sup> <a name="enable_db_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole"></a>

```python
enable_db_console: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_db_express`<sup>Required</sup> <a name="enable_db_express" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress"></a>

```python
enable_db_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_db_listener`<sup>Required</sup> <a name="enable_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener"></a>

```python
enable_db_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_em_console`<sup>Required</sup> <a name="enable_em_console" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole"></a>

```python
enable_em_console: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http`<sup>Required</sup> <a name="enable_http" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp"></a>

```python
enable_http: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http_ssl`<sup>Required</sup> <a name="enable_http_ssl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl"></a>

```python
enable_http_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rac_db_listener`<sup>Required</sup> <a name="enable_rac_db_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener"></a>

```python
enable_rac_db_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rac_ons`<sup>Required</sup> <a name="enable_rac_ons" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns"></a>

```python
enable_rac_ons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_scan_listener`<sup>Required</sup> <a name="enable_scan_listener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener"></a>

```python
enable_scan_listener: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ssh`<sup>Required</sup> <a name="enable_ssh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh"></a>

```python
enable_ssh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---


### DatabaseServiceInstanceHybridDisasterRecoveryOutputReference <a name="DatabaseServiceInstanceHybridDisasterRecoveryOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword">reset_cloud_storage_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername">reset_cloud_storage_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_storage_password` <a name="reset_cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword"></a>

```python
def reset_cloud_storage_password() -> None
```

##### `reset_cloud_storage_username` <a name="reset_cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername"></a>

```python
def reset_cloud_storage_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput">cloud_storage_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput">cloud_storage_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput">cloud_storage_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_container_input`<sup>Optional</sup> <a name="cloud_storage_container_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput"></a>

```python
cloud_storage_container_input: str
```

- *Type:* str

---

##### `cloud_storage_password_input`<sup>Optional</sup> <a name="cloud_storage_password_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput"></a>

```python
cloud_storage_password_input: str
```

- *Type:* str

---

##### `cloud_storage_username_input`<sup>Optional</sup> <a name="cloud_storage_username_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput"></a>

```python
cloud_storage_username_input: str
```

- *Type:* str

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

---

##### `cloud_storage_password`<sup>Required</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

---

##### `cloud_storage_username`<sup>Required</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---


### DatabaseServiceInstanceInstantiateFromBackupOutputReference <a name="DatabaseServiceInstanceInstantiateFromBackupOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword">reset_cloud_storage_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername">reset_cloud_storage_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey">reset_decryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise">reset_on_premise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId">reset_service_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent">reset_wallet_file_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_storage_password` <a name="reset_cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword"></a>

```python
def reset_cloud_storage_password() -> None
```

##### `reset_cloud_storage_username` <a name="reset_cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername"></a>

```python
def reset_cloud_storage_username() -> None
```

##### `reset_decryption_key` <a name="reset_decryption_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey"></a>

```python
def reset_decryption_key() -> None
```

##### `reset_on_premise` <a name="reset_on_premise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise"></a>

```python
def reset_on_premise() -> None
```

##### `reset_service_id` <a name="reset_service_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId"></a>

```python
def reset_service_id() -> None
```

##### `reset_wallet_file_content` <a name="reset_wallet_file_content" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent"></a>

```python
def reset_wallet_file_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput">cloud_storage_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput">cloud_storage_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput">cloud_storage_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput">decryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput">on_premise_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput">wallet_file_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer">cloud_storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword">cloud_storage_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername">cloud_storage_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey">decryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise">on_premise</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent">wallet_file_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_container_input`<sup>Optional</sup> <a name="cloud_storage_container_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput"></a>

```python
cloud_storage_container_input: str
```

- *Type:* str

---

##### `cloud_storage_password_input`<sup>Optional</sup> <a name="cloud_storage_password_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput"></a>

```python
cloud_storage_password_input: str
```

- *Type:* str

---

##### `cloud_storage_username_input`<sup>Optional</sup> <a name="cloud_storage_username_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput"></a>

```python
cloud_storage_username_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `decryption_key_input`<sup>Optional</sup> <a name="decryption_key_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput"></a>

```python
decryption_key_input: str
```

- *Type:* str

---

##### `on_premise_input`<sup>Optional</sup> <a name="on_premise_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput"></a>

```python
on_premise_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `wallet_file_content_input`<sup>Optional</sup> <a name="wallet_file_content_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput"></a>

```python
wallet_file_content_input: str
```

- *Type:* str

---

##### `cloud_storage_container`<sup>Required</sup> <a name="cloud_storage_container" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer"></a>

```python
cloud_storage_container: str
```

- *Type:* str

---

##### `cloud_storage_password`<sup>Required</sup> <a name="cloud_storage_password" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword"></a>

```python
cloud_storage_password: str
```

- *Type:* str

---

##### `cloud_storage_username`<sup>Required</sup> <a name="cloud_storage_username" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername"></a>

```python
cloud_storage_username: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `decryption_key`<sup>Required</sup> <a name="decryption_key" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey"></a>

```python
decryption_key: str
```

- *Type:* str

---

##### `on_premise`<sup>Required</sup> <a name="on_premise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise"></a>

```python
on_premise: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `wallet_file_content`<sup>Required</sup> <a name="wallet_file_content" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent"></a>

```python
wallet_file_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---


### DatabaseServiceInstanceStandbyOutputReference <a name="DatabaseServiceInstanceStandbyOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---


### DatabaseServiceInstanceTimeoutsOutputReference <a name="DatabaseServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_service_instance

databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>]

---



