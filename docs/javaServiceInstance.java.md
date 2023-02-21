# `javaServiceInstance` Submodule <a name="`javaServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.javaServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JavaServiceInstance <a name="JavaServiceInstance" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance oraclepaas_java_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstance;

JavaServiceInstance.Builder.create(Construct scope, java.lang.String id)
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
    .backups(JavaServiceInstanceBackups)
    .edition(java.lang.String)
    .name(java.lang.String)
    .sshPublicKey(java.lang.String)
    .weblogicServer(JavaServiceInstanceWeblogicServer)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .availabilityDomain(java.lang.String)
//  .backupDestination(java.lang.String)
//  .bringYourOwnLicense(java.lang.Boolean)
//  .bringYourOwnLicense(IResolvable)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .enableAdminConsole(java.lang.Boolean)
//  .enableAdminConsole(IResolvable)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .level(java.lang.String)
//  .loadBalancer(JavaServiceInstanceLoadBalancer)
//  .meteringFrequency(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .oracleTrafficDirector(JavaServiceInstanceOracleTrafficDirector)
//  .region(java.lang.String)
//  .serviceVersion(java.lang.String)
//  .snapshotName(java.lang.String)
//  .sourceServiceName(java.lang.String)
//  .subnet(java.lang.String)
//  .timeouts(JavaServiceInstanceTimeouts)
//  .useIdentityService(java.lang.Boolean)
//  .useIdentityService(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.weblogicServer">weblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | weblogic_server block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.enableAdminConsole">enableAdminConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.oracleTrafficDirector">oracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | oracle_traffic_director block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.useIdentityService">useIdentityService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.backups"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backups JavaServiceInstance#backups}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.sshPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}.

---

##### `weblogicServer`<sup>Required</sup> <a name="weblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.weblogicServer"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

weblogic_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#weblogic_server JavaServiceInstance#weblogic_server}

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.assignPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.backupDestination"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}.

---

##### `bringYourOwnLicense`<sup>Optional</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.bringYourOwnLicense"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}.

---

##### `enableAdminConsole`<sup>Optional</sup> <a name="enableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.enableAdminConsole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.ipNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancer JavaServiceInstance#load_balancer}

---

##### `meteringFrequency`<sup>Optional</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.meteringFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}.

---

##### `oracleTrafficDirector`<sup>Optional</sup> <a name="oracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.oracleTrafficDirector"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

oracle_traffic_director block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#oracle_traffic_director JavaServiceInstance#oracle_traffic_director}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}.

---

##### `serviceVersion`<sup>Optional</sup> <a name="serviceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.serviceVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}.

---

##### `sourceServiceName`<sup>Optional</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.sourceServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.subnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#timeouts JavaServiceInstance#timeouts}

---

##### `useIdentityService`<sup>Optional</sup> <a name="useIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.useIdentityService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups">putBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector">putOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer">putWeblogicServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBackupDestination">resetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBringYourOwnLicense">resetBringYourOwnLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetEnableAdminConsole">resetEnableAdminConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetMeteringFrequency">resetMeteringFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOracleTrafficDirector">resetOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetServiceVersion">resetServiceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSourceServiceName">resetSourceServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetUseIdentityService">resetUseIdentityService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBackups` <a name="putBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups"></a>

```java
public void putBackups(JavaServiceInstanceBackups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer"></a>

```java
public void putLoadBalancer(JavaServiceInstanceLoadBalancer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `putOracleTrafficDirector` <a name="putOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector"></a>

```java
public void putOracleTrafficDirector(JavaServiceInstanceOracleTrafficDirector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts"></a>

```java
public void putTimeouts(JavaServiceInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

---

##### `putWeblogicServer` <a name="putWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer"></a>

```java
public void putWeblogicServer(JavaServiceInstanceWeblogicServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetBackupDestination` <a name="resetBackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBackupDestination"></a>

```java
public void resetBackupDestination()
```

##### `resetBringYourOwnLicense` <a name="resetBringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBringYourOwnLicense"></a>

```java
public void resetBringYourOwnLicense()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetEnableAdminConsole` <a name="resetEnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetEnableAdminConsole"></a>

```java
public void resetEnableAdminConsole()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetMeteringFrequency` <a name="resetMeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetMeteringFrequency"></a>

```java
public void resetMeteringFrequency()
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetNotificationEmail"></a>

```java
public void resetNotificationEmail()
```

##### `resetOracleTrafficDirector` <a name="resetOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOracleTrafficDirector"></a>

```java
public void resetOracleTrafficDirector()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceVersion` <a name="resetServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetServiceVersion"></a>

```java
public void resetServiceVersion()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSourceServiceName` <a name="resetSourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSourceServiceName"></a>

```java
public void resetSourceServiceName()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseIdentityService` <a name="resetUseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetUseIdentityService"></a>

```java
public void resetUseIdentityService()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstance;

JavaServiceInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstance;

JavaServiceInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstance;

JavaServiceInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector">oracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer">weblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput">backupDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput">backupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput">bringYourOwnLicenseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput">enableAdminConsoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput">meteringFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput">oracleTrafficDirectorInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput">serviceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput">sourceServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput">useIdentityServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput">weblogicServerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole">enableAdminConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService">useIdentityService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups"></a>

```java
public JavaServiceInstanceBackupsOutputReference getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer"></a>

```java
public JavaServiceInstanceLoadBalancerOutputReference getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a>

---

##### `oracleTrafficDirector`<sup>Required</sup> <a name="oracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorOutputReference getOracleTrafficDirector();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts"></a>

```java
public JavaServiceInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a>

---

##### `weblogicServer`<sup>Required</sup> <a name="weblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer"></a>

```java
public JavaServiceInstanceWeblogicServerOutputReference getWeblogicServer();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a>

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupDestinationInput`<sup>Optional</sup> <a name="backupDestinationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput"></a>

```java
public java.lang.String getBackupDestinationInput();
```

- *Type:* java.lang.String

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput"></a>

```java
public JavaServiceInstanceBackups getBackupsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `bringYourOwnLicenseInput`<sup>Optional</sup> <a name="bringYourOwnLicenseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput"></a>

```java
public java.lang.Object getBringYourOwnLicenseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enableAdminConsoleInput`<sup>Optional</sup> <a name="enableAdminConsoleInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput"></a>

```java
public java.lang.Object getEnableAdminConsoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput"></a>

```java
public JavaServiceInstanceLoadBalancer getLoadBalancerInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `meteringFrequencyInput`<sup>Optional</sup> <a name="meteringFrequencyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput"></a>

```java
public java.lang.String getMeteringFrequencyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `oracleTrafficDirectorInput`<sup>Optional</sup> <a name="oracleTrafficDirectorInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput"></a>

```java
public JavaServiceInstanceOracleTrafficDirector getOracleTrafficDirectorInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceVersionInput`<sup>Optional</sup> <a name="serviceVersionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput"></a>

```java
public java.lang.String getServiceVersionInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `sourceServiceNameInput`<sup>Optional</sup> <a name="sourceServiceNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput"></a>

```java
public java.lang.String getSourceServiceNameInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `useIdentityServiceInput`<sup>Optional</sup> <a name="useIdentityServiceInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput"></a>

```java
public java.lang.Object getUseIdentityServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `weblogicServerInput`<sup>Optional</sup> <a name="weblogicServerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput"></a>

```java
public JavaServiceInstanceWeblogicServer getWeblogicServerInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupDestination`<sup>Required</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

---

##### `bringYourOwnLicense`<sup>Required</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense"></a>

```java
public java.lang.Object getBringYourOwnLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enableAdminConsole`<sup>Required</sup> <a name="enableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole"></a>

```java
public java.lang.Object getEnableAdminConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `meteringFrequency`<sup>Required</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency"></a>

```java
public java.lang.String getMeteringFrequency();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `sourceServiceName`<sup>Required</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `useIdentityService`<sup>Required</sup> <a name="useIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService"></a>

```java
public java.lang.Object getUseIdentityService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JavaServiceInstanceBackups <a name="JavaServiceInstanceBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceBackups;

JavaServiceInstanceBackups.builder()
    .cloudStorageContainer(java.lang.String)
//  .autoGenerate(java.lang.Boolean)
//  .autoGenerate(IResolvable)
//  .cloudStoragePassword(java.lang.String)
//  .cloudStorageUsername(java.lang.String)
//  .useOauthForStorage(java.lang.Boolean)
//  .useOauthForStorage(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate">autoGenerate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#auto_generate JavaServiceInstance#auto_generate}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage">useOauthForStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}.

---

##### `autoGenerate`<sup>Optional</sup> <a name="autoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate"></a>

```java
public java.lang.Object getAutoGenerate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#auto_generate JavaServiceInstance#auto_generate}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}.

---

##### `useOauthForStorage`<sup>Optional</sup> <a name="useOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage"></a>

```java
public java.lang.Object getUseOauthForStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}.

---

### JavaServiceInstanceConfig <a name="JavaServiceInstanceConfig" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceConfig;

JavaServiceInstanceConfig.builder()
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
    .backups(JavaServiceInstanceBackups)
    .edition(java.lang.String)
    .name(java.lang.String)
    .sshPublicKey(java.lang.String)
    .weblogicServer(JavaServiceInstanceWeblogicServer)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .availabilityDomain(java.lang.String)
//  .backupDestination(java.lang.String)
//  .bringYourOwnLicense(java.lang.Boolean)
//  .bringYourOwnLicense(IResolvable)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .enableAdminConsole(java.lang.Boolean)
//  .enableAdminConsole(IResolvable)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .level(java.lang.String)
//  .loadBalancer(JavaServiceInstanceLoadBalancer)
//  .meteringFrequency(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .oracleTrafficDirector(JavaServiceInstanceOracleTrafficDirector)
//  .region(java.lang.String)
//  .serviceVersion(java.lang.String)
//  .snapshotName(java.lang.String)
//  .sourceServiceName(java.lang.String)
//  .subnet(java.lang.String)
//  .timeouts(JavaServiceInstanceTimeouts)
//  .useIdentityService(java.lang.Boolean)
//  .useIdentityService(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer">weblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | weblogic_server block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination">backupDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole">enableAdminConsole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency">meteringFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector">oracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | oracle_traffic_director block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName">sourceServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService">useIdentityService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups"></a>

```java
public JavaServiceInstanceBackups getBackups();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backups JavaServiceInstance#backups}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}.

---

##### `weblogicServer`<sup>Required</sup> <a name="weblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer"></a>

```java
public JavaServiceInstanceWeblogicServer getWeblogicServer();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

weblogic_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#weblogic_server JavaServiceInstance#weblogic_server}

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination"></a>

```java
public java.lang.String getBackupDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}.

---

##### `bringYourOwnLicense`<sup>Optional</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense"></a>

```java
public java.lang.Object getBringYourOwnLicense();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}.

---

##### `enableAdminConsole`<sup>Optional</sup> <a name="enableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole"></a>

```java
public java.lang.Object getEnableAdminConsole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer"></a>

```java
public JavaServiceInstanceLoadBalancer getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancer JavaServiceInstance#load_balancer}

---

##### `meteringFrequency`<sup>Optional</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency"></a>

```java
public java.lang.String getMeteringFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}.

---

##### `oracleTrafficDirector`<sup>Optional</sup> <a name="oracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector"></a>

```java
public JavaServiceInstanceOracleTrafficDirector getOracleTrafficDirector();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

oracle_traffic_director block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#oracle_traffic_director JavaServiceInstance#oracle_traffic_director}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}.

---

##### `serviceVersion`<sup>Optional</sup> <a name="serviceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}.

---

##### `sourceServiceName`<sup>Optional</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName"></a>

```java
public java.lang.String getSourceServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts"></a>

```java
public JavaServiceInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#timeouts JavaServiceInstance#timeouts}

---

##### `useIdentityService`<sup>Optional</sup> <a name="useIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService"></a>

```java
public java.lang.Object getUseIdentityService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}.

---

### JavaServiceInstanceLoadBalancer <a name="JavaServiceInstanceLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceLoadBalancer;

JavaServiceInstanceLoadBalancer.builder()
//  .loadBalancingPolicy(java.lang.String)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy">loadBalancingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnets JavaServiceInstance#subnets}. |

---

##### `loadBalancingPolicy`<sup>Optional</sup> <a name="loadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy"></a>

```java
public java.lang.String getLoadBalancingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnets JavaServiceInstance#subnets}.

---

### JavaServiceInstanceOracleTrafficDirector <a name="JavaServiceInstanceOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirector;

JavaServiceInstanceOracleTrafficDirector.builder()
    .admin(JavaServiceInstanceOracleTrafficDirectorAdmin)
    .shape(java.lang.String)
//  .highAvailability(java.lang.Boolean)
//  .highAvailability(IResolvable)
//  .ipReservations(java.util.List<java.lang.String>)
//  .listener(JavaServiceInstanceOracleTrafficDirectorListener)
//  .loadBalancingPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability">highAvailability</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#high_availability JavaServiceInstance#high_availability}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | listener block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy">loadBalancingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorAdmin getAdmin();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#admin JavaServiceInstance#admin}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `highAvailability`<sup>Optional</sup> <a name="highAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability"></a>

```java
public java.lang.Object getHighAvailability();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#high_availability JavaServiceInstance#high_availability}.

---

##### `ipReservations`<sup>Optional</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `listener`<sup>Optional</sup> <a name="listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorListener getListener();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#listener JavaServiceInstance#listener}

---

##### `loadBalancingPolicy`<sup>Optional</sup> <a name="loadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy"></a>

```java
public java.lang.String getLoadBalancingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

### JavaServiceInstanceOracleTrafficDirectorAdmin <a name="JavaServiceInstanceOracleTrafficDirectorAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirectorAdmin;

JavaServiceInstanceOracleTrafficDirectorAdmin.builder()
    .password(java.lang.String)
    .username(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

### JavaServiceInstanceOracleTrafficDirectorListener <a name="JavaServiceInstanceOracleTrafficDirectorListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirectorListener;

JavaServiceInstanceOracleTrafficDirectorListener.builder()
//  .port(java.lang.Number)
//  .privilegedPort(java.lang.Number)
//  .privilegedSecuredPort(java.lang.Number)
//  .securedPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort">privilegedPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_port JavaServiceInstance#privileged_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort">privilegedSecuredPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort">securedPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `privilegedPort`<sup>Optional</sup> <a name="privilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort"></a>

```java
public java.lang.Number getPrivilegedPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_port JavaServiceInstance#privileged_port}.

---

##### `privilegedSecuredPort`<sup>Optional</sup> <a name="privilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort"></a>

```java
public java.lang.Number getPrivilegedSecuredPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}.

---

##### `securedPort`<sup>Optional</sup> <a name="securedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort"></a>

```java
public java.lang.Number getSecuredPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceTimeouts <a name="JavaServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceTimeouts;

JavaServiceInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#create JavaServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#delete JavaServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#update JavaServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#create JavaServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#delete JavaServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#update JavaServiceInstance#update}.

---

### JavaServiceInstanceWeblogicServer <a name="JavaServiceInstanceWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServer;

JavaServiceInstanceWeblogicServer.builder()
    .admin(JavaServiceInstanceWeblogicServerAdmin)
    .database(JavaServiceInstanceWeblogicServerDatabase)
    .shape(java.lang.String)
//  .applicationDatabase(IResolvable)
//  .applicationDatabase(java.util.List<JavaServiceInstanceWeblogicServerApplicationDatabase>)
//  .backupVolumeSize(java.lang.String)
//  .cluster(IResolvable)
//  .cluster(java.util.List<JavaServiceInstanceWeblogicServerCluster>)
//  .clusterName(java.lang.String)
//  .connectString(java.lang.String)
//  .domain(JavaServiceInstanceWeblogicServerDomain)
//  .ipReservations(java.util.List<java.lang.String>)
//  .managedServers(JavaServiceInstanceWeblogicServerManagedServers)
//  .middlewareVolumeSize(java.lang.String)
//  .nodeManager(JavaServiceInstanceWeblogicServerNodeManager)
//  .ports(JavaServiceInstanceWeblogicServerPorts)
//  .upperStackProductName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database">database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase">applicationDatabase</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>></code> | application_database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize">backupVolumeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster">cluster</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>></code> | cluster block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster_name JavaServiceInstance#cluster_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString">connectString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#connect_string JavaServiceInstance#connect_string}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | domain block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers">managedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | managed_servers block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize">middlewareVolumeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager">nodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | node_manager block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | ports block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName">upperStackProductName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}. |

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin"></a>

```java
public JavaServiceInstanceWeblogicServerAdmin getAdmin();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#admin JavaServiceInstance#admin}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database"></a>

```java
public JavaServiceInstanceWeblogicServerDatabase getDatabase();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#database JavaServiceInstance#database}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `applicationDatabase`<sup>Optional</sup> <a name="applicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase"></a>

```java
public java.lang.Object getApplicationDatabase();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>>

application_database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#application_database JavaServiceInstance#application_database}

---

##### `backupVolumeSize`<sup>Optional</sup> <a name="backupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize"></a>

```java
public java.lang.String getBackupVolumeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster"></a>

```java
public java.lang.Object getCluster();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>>

cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster JavaServiceInstance#cluster}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster_name JavaServiceInstance#cluster_name}.

---

##### `connectString`<sup>Optional</sup> <a name="connectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString"></a>

```java
public java.lang.String getConnectString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#connect_string JavaServiceInstance#connect_string}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain"></a>

```java
public JavaServiceInstanceWeblogicServerDomain getDomain();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

domain block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#domain JavaServiceInstance#domain}

---

##### `ipReservations`<sup>Optional</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `managedServers`<sup>Optional</sup> <a name="managedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers"></a>

```java
public JavaServiceInstanceWeblogicServerManagedServers getManagedServers();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

managed_servers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#managed_servers JavaServiceInstance#managed_servers}

---

##### `middlewareVolumeSize`<sup>Optional</sup> <a name="middlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize"></a>

```java
public java.lang.String getMiddlewareVolumeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}.

---

##### `nodeManager`<sup>Optional</sup> <a name="nodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager"></a>

```java
public JavaServiceInstanceWeblogicServerNodeManager getNodeManager();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

node_manager block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#node_manager JavaServiceInstance#node_manager}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports"></a>

```java
public JavaServiceInstanceWeblogicServerPorts getPorts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ports JavaServiceInstance#ports}

---

##### `upperStackProductName`<sup>Optional</sup> <a name="upperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName"></a>

```java
public java.lang.String getUpperStackProductName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}.

---

### JavaServiceInstanceWeblogicServerAdmin <a name="JavaServiceInstanceWeblogicServerAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerAdmin;

JavaServiceInstanceWeblogicServerAdmin.builder()
    .password(java.lang.String)
    .username(java.lang.String)
//  .port(java.lang.Number)
//  .securedPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort">securedPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `securedPort`<sup>Optional</sup> <a name="securedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort"></a>

```java
public java.lang.Number getSecuredPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceWeblogicServerApplicationDatabase <a name="JavaServiceInstanceWeblogicServerApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerApplicationDatabase;

JavaServiceInstanceWeblogicServerApplicationDatabase.builder()
    .name(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .pdbName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerCluster <a name="JavaServiceInstanceWeblogicServerCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerCluster;

JavaServiceInstanceWeblogicServerCluster.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .pathPrefixes(java.util.List<java.lang.String>)
//  .serverCount(java.lang.Number)
//  .serversPerNode(java.lang.Number)
//  .shape(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#type JavaServiceInstance#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes">pathPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount">serverCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode">serversPerNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#type JavaServiceInstance#type}.

---

##### `pathPrefixes`<sup>Optional</sup> <a name="pathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes"></a>

```java
public java.util.List<java.lang.String> getPathPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}.

---

##### `serverCount`<sup>Optional</sup> <a name="serverCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount"></a>

```java
public java.lang.Number getServerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}.

---

##### `serversPerNode`<sup>Optional</sup> <a name="serversPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode"></a>

```java
public java.lang.Number getServersPerNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

### JavaServiceInstanceWeblogicServerDatabase <a name="JavaServiceInstanceWeblogicServerDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerDatabase;

JavaServiceInstanceWeblogicServerDatabase.builder()
    .password(java.lang.String)
    .username(java.lang.String)
//  .name(java.lang.String)
//  .pdbName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerDomain <a name="JavaServiceInstanceWeblogicServerDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerDomain;

JavaServiceInstanceWeblogicServerDomain.builder()
//  .mode(java.lang.String)
//  .name(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .volumeSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#mode JavaServiceInstance#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#partition_count JavaServiceInstance#partition_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize">volumeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#volume_size JavaServiceInstance#volume_size}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#mode JavaServiceInstance#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#partition_count JavaServiceInstance#partition_count}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize"></a>

```java
public java.lang.String getVolumeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#volume_size JavaServiceInstance#volume_size}.

---

### JavaServiceInstanceWeblogicServerManagedServers <a name="JavaServiceInstanceWeblogicServerManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerManagedServers;

JavaServiceInstanceWeblogicServerManagedServers.builder()
//  .initialHeapSize(java.lang.Number)
//  .initialPermanentGeneration(java.lang.Number)
//  .jvmArgs(java.lang.String)
//  .maxHeapSize(java.lang.Number)
//  .maxPermanentGeneration(java.lang.Number)
//  .overwriteJvmArgs(java.lang.Boolean)
//  .overwriteJvmArgs(IResolvable)
//  .serverCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize">initialHeapSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration">initialPermanentGeneration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs">jvmArgs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#jvm_args JavaServiceInstance#jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize">maxHeapSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration">maxPermanentGeneration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs">overwriteJvmArgs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount">serverCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}. |

---

##### `initialHeapSize`<sup>Optional</sup> <a name="initialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize"></a>

```java
public java.lang.Number getInitialHeapSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}.

---

##### `initialPermanentGeneration`<sup>Optional</sup> <a name="initialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration"></a>

```java
public java.lang.Number getInitialPermanentGeneration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}.

---

##### `jvmArgs`<sup>Optional</sup> <a name="jvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs"></a>

```java
public java.lang.String getJvmArgs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#jvm_args JavaServiceInstance#jvm_args}.

---

##### `maxHeapSize`<sup>Optional</sup> <a name="maxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize"></a>

```java
public java.lang.Number getMaxHeapSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}.

---

##### `maxPermanentGeneration`<sup>Optional</sup> <a name="maxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration"></a>

```java
public java.lang.Number getMaxPermanentGeneration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}.

---

##### `overwriteJvmArgs`<sup>Optional</sup> <a name="overwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs"></a>

```java
public java.lang.Object getOverwriteJvmArgs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}.

---

##### `serverCount`<sup>Optional</sup> <a name="serverCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount"></a>

```java
public java.lang.Number getServerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}.

---

### JavaServiceInstanceWeblogicServerNodeManager <a name="JavaServiceInstanceWeblogicServerNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerNodeManager;

JavaServiceInstanceWeblogicServerNodeManager.builder()
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

### JavaServiceInstanceWeblogicServerPorts <a name="JavaServiceInstanceWeblogicServerPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerPorts;

JavaServiceInstanceWeblogicServerPorts.builder()
//  .contentPort(java.lang.Number)
//  .deploymentChannelPort(java.lang.Number)
//  .privilegedContentPort(java.lang.Number)
//  .privilegedSecuredContentPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort">contentPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#content_port JavaServiceInstance#content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort">deploymentChannelPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort">privilegedContentPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort">privilegedSecuredContentPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}. |

---

##### `contentPort`<sup>Optional</sup> <a name="contentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort"></a>

```java
public java.lang.Number getContentPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#content_port JavaServiceInstance#content_port}.

---

##### `deploymentChannelPort`<sup>Optional</sup> <a name="deploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort"></a>

```java
public java.lang.Number getDeploymentChannelPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}.

---

##### `privilegedContentPort`<sup>Optional</sup> <a name="privilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort"></a>

```java
public java.lang.Number getPrivilegedContentPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}.

---

##### `privilegedSecuredContentPort`<sup>Optional</sup> <a name="privilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort"></a>

```java
public java.lang.Number getPrivilegedSecuredContentPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### JavaServiceInstanceBackupsOutputReference <a name="JavaServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceBackupsOutputReference;

new JavaServiceInstanceBackupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetAutoGenerate">resetAutoGenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetUseOauthForStorage">resetUseOauthForStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoGenerate` <a name="resetAutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetAutoGenerate"></a>

```java
public void resetAutoGenerate()
```

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```java
public void resetCloudStoragePassword()
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```java
public void resetCloudStorageUsername()
```

##### `resetUseOauthForStorage` <a name="resetUseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetUseOauthForStorage"></a>

```java
public void resetUseOauthForStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput">autoGenerateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput">useOauthForStorageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate">autoGenerate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage">useOauthForStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoGenerateInput`<sup>Optional</sup> <a name="autoGenerateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput"></a>

```java
public java.lang.Object getAutoGenerateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```java
public java.lang.String getCloudStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```java
public java.lang.String getCloudStoragePasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```java
public java.lang.String getCloudStorageUsernameInput();
```

- *Type:* java.lang.String

---

##### `useOauthForStorageInput`<sup>Optional</sup> <a name="useOauthForStorageInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput"></a>

```java
public java.lang.Object getUseOauthForStorageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoGenerate`<sup>Required</sup> <a name="autoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate"></a>

```java
public java.lang.Object getAutoGenerate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```java
public java.lang.String getCloudStorageContainer();
```

- *Type:* java.lang.String

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```java
public java.lang.String getCloudStoragePassword();
```

- *Type:* java.lang.String

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```java
public java.lang.String getCloudStorageUsername();
```

- *Type:* java.lang.String

---

##### `useOauthForStorage`<sup>Required</sup> <a name="useOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage"></a>

```java
public java.lang.Object getUseOauthForStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceBackups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---


### JavaServiceInstanceLoadBalancerOutputReference <a name="JavaServiceInstanceLoadBalancerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceLoadBalancerOutputReference;

new JavaServiceInstanceLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetLoadBalancingPolicy">resetLoadBalancingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadBalancingPolicy` <a name="resetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetLoadBalancingPolicy"></a>

```java
public void resetLoadBalancingPolicy()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl">adminUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput">loadBalancingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy">loadBalancingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUrl`<sup>Required</sup> <a name="adminUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl"></a>

```java
public java.lang.String getAdminUrl();
```

- *Type:* java.lang.String

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `loadBalancingPolicyInput`<sup>Optional</sup> <a name="loadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput"></a>

```java
public java.lang.String getLoadBalancingPolicyInput();
```

- *Type:* java.lang.String

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancingPolicy`<sup>Required</sup> <a name="loadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy"></a>

```java
public java.lang.String getLoadBalancingPolicy();
```

- *Type:* java.lang.String

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---


### JavaServiceInstanceOracleTrafficDirectorAdminOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference;

new JavaServiceInstanceOracleTrafficDirectorAdminOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorAdmin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---


### JavaServiceInstanceOracleTrafficDirectorListenerOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorListenerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference;

new JavaServiceInstanceOracleTrafficDirectorListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedPort">resetPrivilegedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedSecuredPort">resetPrivilegedSecuredPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetSecuredPort">resetSecuredPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrivilegedPort` <a name="resetPrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedPort"></a>

```java
public void resetPrivilegedPort()
```

##### `resetPrivilegedSecuredPort` <a name="resetPrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedSecuredPort"></a>

```java
public void resetPrivilegedSecuredPort()
```

##### `resetSecuredPort` <a name="resetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetSecuredPort"></a>

```java
public void resetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput">privilegedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput">privilegedSecuredPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput">securedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort">privilegedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort">privilegedSecuredPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort">securedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privilegedPortInput`<sup>Optional</sup> <a name="privilegedPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput"></a>

```java
public java.lang.Number getPrivilegedPortInput();
```

- *Type:* java.lang.Number

---

##### `privilegedSecuredPortInput`<sup>Optional</sup> <a name="privilegedSecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput"></a>

```java
public java.lang.Number getPrivilegedSecuredPortInput();
```

- *Type:* java.lang.Number

---

##### `securedPortInput`<sup>Optional</sup> <a name="securedPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput"></a>

```java
public java.lang.Number getSecuredPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privilegedPort`<sup>Required</sup> <a name="privilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort"></a>

```java
public java.lang.Number getPrivilegedPort();
```

- *Type:* java.lang.Number

---

##### `privilegedSecuredPort`<sup>Required</sup> <a name="privilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort"></a>

```java
public java.lang.Number getPrivilegedSecuredPort();
```

- *Type:* java.lang.Number

---

##### `securedPort`<sup>Required</sup> <a name="securedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort"></a>

```java
public java.lang.Number getSecuredPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorListener getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---


### JavaServiceInstanceOracleTrafficDirectorOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceOracleTrafficDirectorOutputReference;

new JavaServiceInstanceOracleTrafficDirectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin">putAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener">putListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetHighAvailability">resetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetIpReservations">resetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetListener">resetListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetLoadBalancingPolicy">resetLoadBalancingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdmin` <a name="putAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin"></a>

```java
public void putAdmin(JavaServiceInstanceOracleTrafficDirectorAdmin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `putListener` <a name="putListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener"></a>

```java
public void putListener(JavaServiceInstanceOracleTrafficDirectorListener value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `resetHighAvailability` <a name="resetHighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetHighAvailability"></a>

```java
public void resetHighAvailability()
```

##### `resetIpReservations` <a name="resetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetIpReservations"></a>

```java
public void resetIpReservations()
```

##### `resetListener` <a name="resetListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetListener"></a>

```java
public void resetListener()
```

##### `resetLoadBalancingPolicy` <a name="resetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetLoadBalancingPolicy"></a>

```java
public void resetLoadBalancingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener">listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl">rootUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput">adminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput">highAvailabilityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput">ipReservationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput">listenerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput">loadBalancingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability">highAvailability</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy">loadBalancingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorAdminOutputReference getAdmin();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a>

---

##### `listener`<sup>Required</sup> <a name="listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorListenerOutputReference getListener();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a>

---

##### `rootUrl`<sup>Required</sup> <a name="rootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl"></a>

```java
public java.lang.String getRootUrl();
```

- *Type:* java.lang.String

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorAdmin getAdminInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `highAvailabilityInput`<sup>Optional</sup> <a name="highAvailabilityInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput"></a>

```java
public java.lang.Object getHighAvailabilityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipReservationsInput`<sup>Optional</sup> <a name="ipReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput"></a>

```java
public java.util.List<java.lang.String> getIpReservationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerInput`<sup>Optional</sup> <a name="listenerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput"></a>

```java
public JavaServiceInstanceOracleTrafficDirectorListener getListenerInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `loadBalancingPolicyInput`<sup>Optional</sup> <a name="loadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput"></a>

```java
public java.lang.String getLoadBalancingPolicyInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability"></a>

```java
public java.lang.Object getHighAvailability();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipReservations`<sup>Required</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancingPolicy`<sup>Required</sup> <a name="loadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy"></a>

```java
public java.lang.String getLoadBalancingPolicy();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceOracleTrafficDirector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---


### JavaServiceInstanceTimeoutsOutputReference <a name="JavaServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceTimeoutsOutputReference;

new JavaServiceInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### JavaServiceInstanceWeblogicServerAdminOutputReference <a name="JavaServiceInstanceWeblogicServerAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerAdminOutputReference;

new JavaServiceInstanceWeblogicServerAdminOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetSecuredPort">resetSecuredPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecuredPort` <a name="resetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetSecuredPort"></a>

```java
public void resetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput">securedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort">securedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `securedPortInput`<sup>Optional</sup> <a name="securedPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput"></a>

```java
public java.lang.Number getSecuredPortInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `securedPort`<sup>Required</sup> <a name="securedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort"></a>

```java
public java.lang.Number getSecuredPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerAdmin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseList <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerApplicationDatabaseList;

new JavaServiceInstanceWeblogicServerApplicationDatabaseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get"></a>

```java
public JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>>

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference;

new JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resetPdbName">resetPdbName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPdbName` <a name="resetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resetPdbName"></a>

```java
public void resetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a> OR com.hashicorp.cdktf.IResolvable

---


### JavaServiceInstanceWeblogicServerClusterList <a name="JavaServiceInstanceWeblogicServerClusterList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerClusterList;

new JavaServiceInstanceWeblogicServerClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get"></a>

```java
public JavaServiceInstanceWeblogicServerClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>>

---


### JavaServiceInstanceWeblogicServerClusterOutputReference <a name="JavaServiceInstanceWeblogicServerClusterOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerClusterOutputReference;

new JavaServiceInstanceWeblogicServerClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetPathPrefixes">resetPathPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServerCount">resetServerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServersPerNode">resetServersPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetShape">resetShape</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathPrefixes` <a name="resetPathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetPathPrefixes"></a>

```java
public void resetPathPrefixes()
```

##### `resetServerCount` <a name="resetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServerCount"></a>

```java
public void resetServerCount()
```

##### `resetServersPerNode` <a name="resetServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServersPerNode"></a>

```java
public void resetServersPerNode()
```

##### `resetShape` <a name="resetShape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetShape"></a>

```java
public void resetShape()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput">pathPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput">serverCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput">serversPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes">pathPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount">serverCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode">serversPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixesInput`<sup>Optional</sup> <a name="pathPrefixesInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getPathPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverCountInput`<sup>Optional</sup> <a name="serverCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput"></a>

```java
public java.lang.Number getServerCountInput();
```

- *Type:* java.lang.Number

---

##### `serversPerNodeInput`<sup>Optional</sup> <a name="serversPerNodeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput"></a>

```java
public java.lang.Number getServersPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathPrefixes`<sup>Required</sup> <a name="pathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes"></a>

```java
public java.util.List<java.lang.String> getPathPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount"></a>

```java
public java.lang.Number getServerCount();
```

- *Type:* java.lang.Number

---

##### `serversPerNode`<sup>Required</sup> <a name="serversPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode"></a>

```java
public java.lang.Number getServersPerNode();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a> OR com.hashicorp.cdktf.IResolvable

---


### JavaServiceInstanceWeblogicServerDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerDatabaseOutputReference;

new JavaServiceInstanceWeblogicServerDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetPdbName">resetPdbName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPdbName` <a name="resetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetPdbName"></a>

```java
public void resetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---


### JavaServiceInstanceWeblogicServerDomainOutputReference <a name="JavaServiceInstanceWeblogicServerDomainOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerDomainOutputReference;

new JavaServiceInstanceWeblogicServerDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetPartitionCount"></a>

```java
public void resetPartitionCount()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput">partitionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput"></a>

```java
public java.lang.Number getPartitionCountInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.String getVolumeSizeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize"></a>

```java
public java.lang.String getVolumeSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerDomain getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---


### JavaServiceInstanceWeblogicServerManagedServersOutputReference <a name="JavaServiceInstanceWeblogicServerManagedServersOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerManagedServersOutputReference;

new JavaServiceInstanceWeblogicServerManagedServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialHeapSize">resetInitialHeapSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialPermanentGeneration">resetInitialPermanentGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetJvmArgs">resetJvmArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxHeapSize">resetMaxHeapSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxPermanentGeneration">resetMaxPermanentGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetOverwriteJvmArgs">resetOverwriteJvmArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetServerCount">resetServerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitialHeapSize` <a name="resetInitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialHeapSize"></a>

```java
public void resetInitialHeapSize()
```

##### `resetInitialPermanentGeneration` <a name="resetInitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialPermanentGeneration"></a>

```java
public void resetInitialPermanentGeneration()
```

##### `resetJvmArgs` <a name="resetJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetJvmArgs"></a>

```java
public void resetJvmArgs()
```

##### `resetMaxHeapSize` <a name="resetMaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxHeapSize"></a>

```java
public void resetMaxHeapSize()
```

##### `resetMaxPermanentGeneration` <a name="resetMaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxPermanentGeneration"></a>

```java
public void resetMaxPermanentGeneration()
```

##### `resetOverwriteJvmArgs` <a name="resetOverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetOverwriteJvmArgs"></a>

```java
public void resetOverwriteJvmArgs()
```

##### `resetServerCount` <a name="resetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetServerCount"></a>

```java
public void resetServerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput">initialHeapSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput">initialPermanentGenerationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput">jvmArgsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput">maxHeapSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput">maxPermanentGenerationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput">overwriteJvmArgsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput">serverCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize">initialHeapSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration">initialPermanentGeneration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs">jvmArgs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize">maxHeapSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration">maxPermanentGeneration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs">overwriteJvmArgs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount">serverCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialHeapSizeInput`<sup>Optional</sup> <a name="initialHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput"></a>

```java
public java.lang.Number getInitialHeapSizeInput();
```

- *Type:* java.lang.Number

---

##### `initialPermanentGenerationInput`<sup>Optional</sup> <a name="initialPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput"></a>

```java
public java.lang.Number getInitialPermanentGenerationInput();
```

- *Type:* java.lang.Number

---

##### `jvmArgsInput`<sup>Optional</sup> <a name="jvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput"></a>

```java
public java.lang.String getJvmArgsInput();
```

- *Type:* java.lang.String

---

##### `maxHeapSizeInput`<sup>Optional</sup> <a name="maxHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput"></a>

```java
public java.lang.Number getMaxHeapSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxPermanentGenerationInput`<sup>Optional</sup> <a name="maxPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput"></a>

```java
public java.lang.Number getMaxPermanentGenerationInput();
```

- *Type:* java.lang.Number

---

##### `overwriteJvmArgsInput`<sup>Optional</sup> <a name="overwriteJvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput"></a>

```java
public java.lang.Object getOverwriteJvmArgsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverCountInput`<sup>Optional</sup> <a name="serverCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput"></a>

```java
public java.lang.Number getServerCountInput();
```

- *Type:* java.lang.Number

---

##### `initialHeapSize`<sup>Required</sup> <a name="initialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize"></a>

```java
public java.lang.Number getInitialHeapSize();
```

- *Type:* java.lang.Number

---

##### `initialPermanentGeneration`<sup>Required</sup> <a name="initialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration"></a>

```java
public java.lang.Number getInitialPermanentGeneration();
```

- *Type:* java.lang.Number

---

##### `jvmArgs`<sup>Required</sup> <a name="jvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs"></a>

```java
public java.lang.String getJvmArgs();
```

- *Type:* java.lang.String

---

##### `maxHeapSize`<sup>Required</sup> <a name="maxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize"></a>

```java
public java.lang.Number getMaxHeapSize();
```

- *Type:* java.lang.Number

---

##### `maxPermanentGeneration`<sup>Required</sup> <a name="maxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration"></a>

```java
public java.lang.Number getMaxPermanentGeneration();
```

- *Type:* java.lang.Number

---

##### `overwriteJvmArgs`<sup>Required</sup> <a name="overwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs"></a>

```java
public java.lang.Object getOverwriteJvmArgs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount"></a>

```java
public java.lang.Number getServerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerManagedServers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---


### JavaServiceInstanceWeblogicServerNodeManagerOutputReference <a name="JavaServiceInstanceWeblogicServerNodeManagerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference;

new JavaServiceInstanceWeblogicServerNodeManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerNodeManager getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---


### JavaServiceInstanceWeblogicServerOutputReference <a name="JavaServiceInstanceWeblogicServerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerOutputReference;

new JavaServiceInstanceWeblogicServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin">putAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase">putApplicationDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster">putCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain">putDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers">putManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager">putNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetApplicationDatabase">resetApplicationDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetBackupVolumeSize">resetBackupVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetConnectString">resetConnectString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetIpReservations">resetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetManagedServers">resetManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetMiddlewareVolumeSize">resetMiddlewareVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetNodeManager">resetNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetUpperStackProductName">resetUpperStackProductName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdmin` <a name="putAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin"></a>

```java
public void putAdmin(JavaServiceInstanceWeblogicServerAdmin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `putApplicationDatabase` <a name="putApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase"></a>

```java
public void putApplicationDatabase(IResolvable OR java.util.List<JavaServiceInstanceWeblogicServerApplicationDatabase> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>>

---

##### `putCluster` <a name="putCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster"></a>

```java
public void putCluster(IResolvable OR java.util.List<JavaServiceInstanceWeblogicServerCluster> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>>

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase"></a>

```java
public void putDatabase(JavaServiceInstanceWeblogicServerDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `putDomain` <a name="putDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain"></a>

```java
public void putDomain(JavaServiceInstanceWeblogicServerDomain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `putManagedServers` <a name="putManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers"></a>

```java
public void putManagedServers(JavaServiceInstanceWeblogicServerManagedServers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `putNodeManager` <a name="putNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager"></a>

```java
public void putNodeManager(JavaServiceInstanceWeblogicServerNodeManager value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts"></a>

```java
public void putPorts(JavaServiceInstanceWeblogicServerPorts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `resetApplicationDatabase` <a name="resetApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetApplicationDatabase"></a>

```java
public void resetApplicationDatabase()
```

##### `resetBackupVolumeSize` <a name="resetBackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetBackupVolumeSize"></a>

```java
public void resetBackupVolumeSize()
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetConnectString` <a name="resetConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetConnectString"></a>

```java
public void resetConnectString()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetIpReservations` <a name="resetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetIpReservations"></a>

```java
public void resetIpReservations()
```

##### `resetManagedServers` <a name="resetManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetManagedServers"></a>

```java
public void resetManagedServers()
```

##### `resetMiddlewareVolumeSize` <a name="resetMiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetMiddlewareVolumeSize"></a>

```java
public void resetMiddlewareVolumeSize()
```

##### `resetNodeManager` <a name="resetNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetNodeManager"></a>

```java
public void resetNodeManager()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetUpperStackProductName` <a name="resetUpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetUpperStackProductName"></a>

```java
public void resetUpperStackProductName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase">applicationDatabase</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database">database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers">managedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager">nodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl">rootUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput">adminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput">applicationDatabaseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput">backupVolumeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput">clusterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput">connectStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput">domainInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput">ipReservationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput">managedServersInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput">middlewareVolumeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput">nodeManagerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput">portsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput">upperStackProductNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize">backupVolumeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString">connectString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations">ipReservations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize">middlewareVolumeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName">upperStackProductName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin"></a>

```java
public JavaServiceInstanceWeblogicServerAdminOutputReference getAdmin();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a>

---

##### `applicationDatabase`<sup>Required</sup> <a name="applicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase"></a>

```java
public JavaServiceInstanceWeblogicServerApplicationDatabaseList getApplicationDatabase();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster"></a>

```java
public JavaServiceInstanceWeblogicServerClusterList getCluster();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database"></a>

```java
public JavaServiceInstanceWeblogicServerDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain"></a>

```java
public JavaServiceInstanceWeblogicServerDomainOutputReference getDomain();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a>

---

##### `managedServers`<sup>Required</sup> <a name="managedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers"></a>

```java
public JavaServiceInstanceWeblogicServerManagedServersOutputReference getManagedServers();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a>

---

##### `nodeManager`<sup>Required</sup> <a name="nodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager"></a>

```java
public JavaServiceInstanceWeblogicServerNodeManagerOutputReference getNodeManager();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports"></a>

```java
public JavaServiceInstanceWeblogicServerPortsOutputReference getPorts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a>

---

##### `rootUrl`<sup>Required</sup> <a name="rootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl"></a>

```java
public java.lang.String getRootUrl();
```

- *Type:* java.lang.String

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput"></a>

```java
public JavaServiceInstanceWeblogicServerAdmin getAdminInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `applicationDatabaseInput`<sup>Optional</sup> <a name="applicationDatabaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput"></a>

```java
public java.lang.Object getApplicationDatabaseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase">JavaServiceInstanceWeblogicServerApplicationDatabase</a>>

---

##### `backupVolumeSizeInput`<sup>Optional</sup> <a name="backupVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput"></a>

```java
public java.lang.String getBackupVolumeSizeInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput"></a>

```java
public java.lang.Object getClusterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster">JavaServiceInstanceWeblogicServerCluster</a>>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `connectStringInput`<sup>Optional</sup> <a name="connectStringInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput"></a>

```java
public java.lang.String getConnectStringInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput"></a>

```java
public JavaServiceInstanceWeblogicServerDatabase getDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput"></a>

```java
public JavaServiceInstanceWeblogicServerDomain getDomainInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `ipReservationsInput`<sup>Optional</sup> <a name="ipReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput"></a>

```java
public java.util.List<java.lang.String> getIpReservationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedServersInput`<sup>Optional</sup> <a name="managedServersInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput"></a>

```java
public JavaServiceInstanceWeblogicServerManagedServers getManagedServersInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `middlewareVolumeSizeInput`<sup>Optional</sup> <a name="middlewareVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput"></a>

```java
public java.lang.String getMiddlewareVolumeSizeInput();
```

- *Type:* java.lang.String

---

##### `nodeManagerInput`<sup>Optional</sup> <a name="nodeManagerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput"></a>

```java
public JavaServiceInstanceWeblogicServerNodeManager getNodeManagerInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput"></a>

```java
public JavaServiceInstanceWeblogicServerPorts getPortsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `upperStackProductNameInput`<sup>Optional</sup> <a name="upperStackProductNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput"></a>

```java
public java.lang.String getUpperStackProductNameInput();
```

- *Type:* java.lang.String

---

##### `backupVolumeSize`<sup>Required</sup> <a name="backupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize"></a>

```java
public java.lang.String getBackupVolumeSize();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `connectString`<sup>Required</sup> <a name="connectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString"></a>

```java
public java.lang.String getConnectString();
```

- *Type:* java.lang.String

---

##### `ipReservations`<sup>Required</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations"></a>

```java
public java.util.List<java.lang.String> getIpReservations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `middlewareVolumeSize`<sup>Required</sup> <a name="middlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize"></a>

```java
public java.lang.String getMiddlewareVolumeSize();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `upperStackProductName`<sup>Required</sup> <a name="upperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName"></a>

```java
public java.lang.String getUpperStackProductName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---


### JavaServiceInstanceWeblogicServerPortsOutputReference <a name="JavaServiceInstanceWeblogicServerPortsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.java_service_instance.JavaServiceInstanceWeblogicServerPortsOutputReference;

new JavaServiceInstanceWeblogicServerPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetContentPort">resetContentPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetDeploymentChannelPort">resetDeploymentChannelPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedContentPort">resetPrivilegedContentPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedSecuredContentPort">resetPrivilegedSecuredContentPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentPort` <a name="resetContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetContentPort"></a>

```java
public void resetContentPort()
```

##### `resetDeploymentChannelPort` <a name="resetDeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetDeploymentChannelPort"></a>

```java
public void resetDeploymentChannelPort()
```

##### `resetPrivilegedContentPort` <a name="resetPrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedContentPort"></a>

```java
public void resetPrivilegedContentPort()
```

##### `resetPrivilegedSecuredContentPort` <a name="resetPrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedSecuredContentPort"></a>

```java
public void resetPrivilegedSecuredContentPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput">contentPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput">deploymentChannelPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput">privilegedContentPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput">privilegedSecuredContentPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort">contentPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort">deploymentChannelPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort">privilegedContentPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort">privilegedSecuredContentPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentPortInput`<sup>Optional</sup> <a name="contentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput"></a>

```java
public java.lang.Number getContentPortInput();
```

- *Type:* java.lang.Number

---

##### `deploymentChannelPortInput`<sup>Optional</sup> <a name="deploymentChannelPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput"></a>

```java
public java.lang.Number getDeploymentChannelPortInput();
```

- *Type:* java.lang.Number

---

##### `privilegedContentPortInput`<sup>Optional</sup> <a name="privilegedContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput"></a>

```java
public java.lang.Number getPrivilegedContentPortInput();
```

- *Type:* java.lang.Number

---

##### `privilegedSecuredContentPortInput`<sup>Optional</sup> <a name="privilegedSecuredContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput"></a>

```java
public java.lang.Number getPrivilegedSecuredContentPortInput();
```

- *Type:* java.lang.Number

---

##### `contentPort`<sup>Required</sup> <a name="contentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort"></a>

```java
public java.lang.Number getContentPort();
```

- *Type:* java.lang.Number

---

##### `deploymentChannelPort`<sup>Required</sup> <a name="deploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort"></a>

```java
public java.lang.Number getDeploymentChannelPort();
```

- *Type:* java.lang.Number

---

##### `privilegedContentPort`<sup>Required</sup> <a name="privilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort"></a>

```java
public java.lang.Number getPrivilegedContentPort();
```

- *Type:* java.lang.Number

---

##### `privilegedSecuredContentPort`<sup>Required</sup> <a name="privilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort"></a>

```java
public java.lang.Number getPrivilegedSecuredContentPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue"></a>

```java
public JavaServiceInstanceWeblogicServerPorts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---



