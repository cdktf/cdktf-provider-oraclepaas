# `applicationContainer` Submodule <a name="`applicationContainer` Submodule" id="@cdktf/provider-oraclepaas.applicationContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationContainer <a name="ApplicationContainer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container oraclepaas_application_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainer;

ApplicationContainer.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .archiveUrl(java.lang.String)
//  .authType(java.lang.String)
//  .availabilityDomain(java.util.List<java.lang.String>)
//  .deployment(ApplicationContainerDeployment)
//  .deploymentFile(java.lang.String)
//  .gitPassword(java.lang.String)
//  .gitRepository(java.lang.String)
//  .gitUsername(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerSubnets(java.util.List<java.lang.String>)
//  .manifest(ApplicationContainerManifest)
//  .manifestFile(java.lang.String)
//  .notes(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .runtime(java.lang.String)
//  .subscriptionType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationContainerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.archiveUrl">archiveUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deploymentFile">deploymentFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitPassword">gitPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitRepository">gitRepository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitUsername">gitUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.loadBalancerSubnets">loadBalancerSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifestFile">manifestFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `archiveUrl`<sup>Optional</sup> <a name="archiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.archiveUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment ApplicationContainer#deployment}

---

##### `deploymentFile`<sup>Optional</sup> <a name="deploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deploymentFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `gitPassword`<sup>Optional</sup> <a name="gitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitRepository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `gitUsername`<sup>Optional</sup> <a name="gitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerSubnets`<sup>Optional</sup> <a name="loadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.loadBalancerSubnets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifest"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest ApplicationContainer#manifest}

---

##### `manifestFile`<sup>Optional</sup> <a name="manifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifestFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}.

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.subscriptionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#timeouts ApplicationContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl">resetArchiveUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile">resetDeploymentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword">resetGitPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername">resetGitUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets">resetLoadBalancerSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile">resetManifestFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType">resetSubscriptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment"></a>

```java
public void putDeployment(ApplicationContainerDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `putManifest` <a name="putManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest"></a>

```java
public void putManifest(ApplicationContainerManifest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts"></a>

```java
public void putTimeouts(ApplicationContainerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

---

##### `resetArchiveUrl` <a name="resetArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl"></a>

```java
public void resetArchiveUrl()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment"></a>

```java
public void resetDeployment()
```

##### `resetDeploymentFile` <a name="resetDeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile"></a>

```java
public void resetDeploymentFile()
```

##### `resetGitPassword` <a name="resetGitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword"></a>

```java
public void resetGitPassword()
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository"></a>

```java
public void resetGitRepository()
```

##### `resetGitUsername` <a name="resetGitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername"></a>

```java
public void resetGitUsername()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancerSubnets` <a name="resetLoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets"></a>

```java
public void resetLoadBalancerSubnets()
```

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetManifestFile` <a name="resetManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile"></a>

```java
public void resetManifestFile()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail"></a>

```java
public void resetNotificationEmail()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSubscriptionType` <a name="resetSubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType"></a>

```java
public void resetSubscriptionType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainer;

ApplicationContainer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainer;

ApplicationContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainer;

ApplicationContainer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainer;

ApplicationContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl">appUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput">archiveUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput">deploymentFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput">gitPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput">gitUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput">loadBalancerSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput">manifestFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput">manifestInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl">archiveUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain">availabilityDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile">deploymentFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword">gitPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository">gitRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername">gitUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets">loadBalancerSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile">manifestFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appUrl`<sup>Required</sup> <a name="appUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl"></a>

```java
public java.lang.String getAppUrl();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment"></a>

```java
public ApplicationContainerDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest"></a>

```java
public ApplicationContainerManifestOutputReference getManifest();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts"></a>

```java
public ApplicationContainerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a>

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `archiveUrlInput`<sup>Optional</sup> <a name="archiveUrlInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput"></a>

```java
public java.lang.String getArchiveUrlInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentFileInput`<sup>Optional</sup> <a name="deploymentFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput"></a>

```java
public java.lang.String getDeploymentFileInput();
```

- *Type:* java.lang.String

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput"></a>

```java
public ApplicationContainerDeployment getDeploymentInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `gitPasswordInput`<sup>Optional</sup> <a name="gitPasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput"></a>

```java
public java.lang.String getGitPasswordInput();
```

- *Type:* java.lang.String

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput"></a>

```java
public java.lang.String getGitRepositoryInput();
```

- *Type:* java.lang.String

---

##### `gitUsernameInput`<sup>Optional</sup> <a name="gitUsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput"></a>

```java
public java.lang.String getGitUsernameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnetsInput`<sup>Optional</sup> <a name="loadBalancerSubnetsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifestFileInput`<sup>Optional</sup> <a name="manifestFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput"></a>

```java
public java.lang.String getManifestFileInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput"></a>

```java
public ApplicationContainerManifest getManifestInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput"></a>

```java
public java.lang.String getSubscriptionTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `archiveUrl`<sup>Required</sup> <a name="archiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl"></a>

```java
public java.lang.String getArchiveUrl();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain"></a>

```java
public java.util.List<java.lang.String> getAvailabilityDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentFile`<sup>Required</sup> <a name="deploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile"></a>

```java
public java.lang.String getDeploymentFile();
```

- *Type:* java.lang.String

---

##### `gitPassword`<sup>Required</sup> <a name="gitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword"></a>

```java
public java.lang.String getGitPassword();
```

- *Type:* java.lang.String

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository"></a>

```java
public java.lang.String getGitRepository();
```

- *Type:* java.lang.String

---

##### `gitUsername`<sup>Required</sup> <a name="gitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername"></a>

```java
public java.lang.String getGitUsername();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnets`<sup>Required</sup> <a name="loadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifestFile`<sup>Required</sup> <a name="manifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile"></a>

```java
public java.lang.String getManifestFile();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationContainerConfig <a name="ApplicationContainerConfig" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerConfig;

ApplicationContainerConfig.builder()
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
    .name(java.lang.String)
//  .archiveUrl(java.lang.String)
//  .authType(java.lang.String)
//  .availabilityDomain(java.util.List<java.lang.String>)
//  .deployment(ApplicationContainerDeployment)
//  .deploymentFile(java.lang.String)
//  .gitPassword(java.lang.String)
//  .gitRepository(java.lang.String)
//  .gitUsername(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerSubnets(java.util.List<java.lang.String>)
//  .manifest(ApplicationContainerManifest)
//  .manifestFile(java.lang.String)
//  .notes(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .region(java.lang.String)
//  .runtime(java.lang.String)
//  .subscriptionType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationContainerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl">archiveUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile">deploymentFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword">gitPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository">gitRepository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername">gitUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets">loadBalancerSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile">manifestFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType">subscriptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `archiveUrl`<sup>Optional</sup> <a name="archiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl"></a>

```java
public java.lang.String getArchiveUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain"></a>

```java
public java.util.List<java.lang.String> getAvailabilityDomain();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment"></a>

```java
public ApplicationContainerDeployment getDeployment();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment ApplicationContainer#deployment}

---

##### `deploymentFile`<sup>Optional</sup> <a name="deploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile"></a>

```java
public java.lang.String getDeploymentFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `gitPassword`<sup>Optional</sup> <a name="gitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword"></a>

```java
public java.lang.String getGitPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository"></a>

```java
public java.lang.String getGitRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `gitUsername`<sup>Optional</sup> <a name="gitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername"></a>

```java
public java.lang.String getGitUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerSubnets`<sup>Optional</sup> <a name="loadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest"></a>

```java
public ApplicationContainerManifest getManifest();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest ApplicationContainer#manifest}

---

##### `manifestFile`<sup>Optional</sup> <a name="manifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile"></a>

```java
public java.lang.String getManifestFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}.

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType"></a>

```java
public java.lang.String getSubscriptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts"></a>

```java
public ApplicationContainerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#timeouts ApplicationContainer#timeouts}

---

### ApplicationContainerDeployment <a name="ApplicationContainerDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerDeployment;

ApplicationContainerDeployment.builder()
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
//  .instances(java.lang.Number)
//  .javaSystemProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .memory(java.lang.String)
//  .notes(java.lang.String)
//  .secureEnvironment(java.util.List<java.lang.String>)
//  .services(IResolvable)
//  .services(java.util.List<ApplicationContainerDeploymentServices>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances">instances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties">javaSystemProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment">secureEnvironment</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services">services</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>></code> | services block. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances"></a>

```java
public java.lang.Number getInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}.

---

##### `javaSystemProperties`<sup>Optional</sup> <a name="javaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJavaSystemProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `secureEnvironment`<sup>Optional</sup> <a name="secureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment"></a>

```java
public java.util.List<java.lang.String> getSecureEnvironment();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services"></a>

```java
public java.lang.Object getServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#services ApplicationContainer#services}

---

### ApplicationContainerDeploymentServices <a name="ApplicationContainerDeploymentServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerDeploymentServices;

ApplicationContainerDeploymentServices.builder()
    .identifier(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .type(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}.

---

### ApplicationContainerManifest <a name="ApplicationContainerManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifest;

ApplicationContainerManifest.builder()
//  .clustered(java.lang.Boolean)
//  .clustered(IResolvable)
//  .command(java.lang.String)
//  .healthCheckEndpoint(java.lang.String)
//  .home(java.lang.String)
//  .mode(java.lang.String)
//  .notes(java.lang.String)
//  .release(ApplicationContainerManifestRelease)
//  .runtime(ApplicationContainerManifestRuntime)
//  .shutdownTime(java.lang.Number)
//  .startupTime(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered">clustered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command">command</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint">healthCheckEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home">home</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | release block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime">shutdownTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime">startupTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |

---

##### `clustered`<sup>Optional</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered"></a>

```java
public java.lang.Object getClustered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}.

---

##### `healthCheckEndpoint`<sup>Optional</sup> <a name="healthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint"></a>

```java
public java.lang.String getHealthCheckEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release"></a>

```java
public ApplicationContainerManifestRelease getRelease();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#release ApplicationContainer#release}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime"></a>

```java
public ApplicationContainerManifestRuntime getRuntime();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}

---

##### `shutdownTime`<sup>Optional</sup> <a name="shutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime"></a>

```java
public java.lang.Number getShutdownTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

##### `startupTime`<sup>Optional</sup> <a name="startupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime"></a>

```java
public java.lang.Number getStartupTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

### ApplicationContainerManifestRelease <a name="ApplicationContainerManifestRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifestRelease;

ApplicationContainerManifestRelease.builder()
//  .buildAttribute(java.lang.String)
//  .commit(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit">commit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}. |

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}.

---

### ApplicationContainerManifestRuntime <a name="ApplicationContainerManifestRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifestRuntime;

ApplicationContainerManifestRuntime.builder()
    .majorVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion">majorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}. |

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion"></a>

```java
public java.lang.String getMajorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}.

---

### ApplicationContainerTimeouts <a name="ApplicationContainerTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerTimeouts;

ApplicationContainerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationContainerDeploymentOutputReference <a name="ApplicationContainerDeploymentOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerDeploymentOutputReference;

new ApplicationContainerDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties">resetJavaSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment">resetSecureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServices` <a name="putServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices"></a>

```java
public void putServices(IResolvable OR java.util.List<ApplicationContainerDeploymentServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>>

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetJavaSystemProperties` <a name="resetJavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties"></a>

```java
public void resetJavaSystemProperties()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetSecureEnvironment` <a name="resetSecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment"></a>

```java
public void resetSecureEnvironment()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices"></a>

```java
public void resetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services">services</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput">javaSystemPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput">secureEnvironmentInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput">servicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances">instances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties">javaSystemProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment">secureEnvironment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services"></a>

```java
public ApplicationContainerDeploymentServicesList getServices();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput"></a>

```java
public java.lang.Number getInstancesInput();
```

- *Type:* java.lang.Number

---

##### `javaSystemPropertiesInput`<sup>Optional</sup> <a name="javaSystemPropertiesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJavaSystemPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `secureEnvironmentInput`<sup>Optional</sup> <a name="secureEnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput"></a>

```java
public java.util.List<java.lang.String> getSecureEnvironmentInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput"></a>

```java
public java.lang.Object getServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances"></a>

```java
public java.lang.Number getInstances();
```

- *Type:* java.lang.Number

---

##### `javaSystemProperties`<sup>Required</sup> <a name="javaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJavaSystemProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `secureEnvironment`<sup>Required</sup> <a name="secureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment"></a>

```java
public java.util.List<java.lang.String> getSecureEnvironment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue"></a>

```java
public ApplicationContainerDeployment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---


### ApplicationContainerDeploymentServicesList <a name="ApplicationContainerDeploymentServicesList" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerDeploymentServicesList;

new ApplicationContainerDeploymentServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get"></a>

```java
public ApplicationContainerDeploymentServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>>

---


### ApplicationContainerDeploymentServicesOutputReference <a name="ApplicationContainerDeploymentServicesOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerDeploymentServicesOutputReference;

new ApplicationContainerDeploymentServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a> OR com.hashicorp.cdktf.IResolvable

---


### ApplicationContainerManifestOutputReference <a name="ApplicationContainerManifestOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifestOutputReference;

new ApplicationContainerManifestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease">putRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered">resetClustered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint">resetHealthCheckEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease">resetRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime">resetShutdownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime">resetStartupTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelease` <a name="putRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease"></a>

```java
public void putRelease(ApplicationContainerManifestRelease value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `putRuntime` <a name="putRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime"></a>

```java
public void putRuntime(ApplicationContainerManifestRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `resetClustered` <a name="resetClustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered"></a>

```java
public void resetClustered()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetHealthCheckEndpoint` <a name="resetHealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint"></a>

```java
public void resetHealthCheckEndpoint()
```

##### `resetHome` <a name="resetHome" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome"></a>

```java
public void resetHome()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetRelease` <a name="resetRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease"></a>

```java
public void resetRelease()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetShutdownTime` <a name="resetShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime"></a>

```java
public void resetShutdownTime()
```

##### `resetStartupTime` <a name="resetStartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime"></a>

```java
public void resetStartupTime()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput">clusteredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput">commandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput">healthCheckEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput">homeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput">releaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput">runtimeInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput">shutdownTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput">startupTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered">clustered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command">command</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint">healthCheckEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home">home</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime">shutdownTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime">startupTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release"></a>

```java
public ApplicationContainerManifestReleaseOutputReference getRelease();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime"></a>

```java
public ApplicationContainerManifestRuntimeOutputReference getRuntime();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a>

---

##### `clusteredInput`<sup>Optional</sup> <a name="clusteredInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput"></a>

```java
public java.lang.Object getClusteredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput"></a>

```java
public java.lang.String getCommandInput();
```

- *Type:* java.lang.String

---

##### `healthCheckEndpointInput`<sup>Optional</sup> <a name="healthCheckEndpointInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput"></a>

```java
public java.lang.String getHealthCheckEndpointInput();
```

- *Type:* java.lang.String

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput"></a>

```java
public java.lang.String getHomeInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput"></a>

```java
public ApplicationContainerManifestRelease getReleaseInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput"></a>

```java
public ApplicationContainerManifestRuntime getRuntimeInput();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `shutdownTimeInput`<sup>Optional</sup> <a name="shutdownTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput"></a>

```java
public java.lang.Number getShutdownTimeInput();
```

- *Type:* java.lang.Number

---

##### `startupTimeInput`<sup>Optional</sup> <a name="startupTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput"></a>

```java
public java.lang.Number getStartupTimeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `clustered`<sup>Required</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered"></a>

```java
public java.lang.Object getClustered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

---

##### `healthCheckEndpoint`<sup>Required</sup> <a name="healthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint"></a>

```java
public java.lang.String getHealthCheckEndpoint();
```

- *Type:* java.lang.String

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `shutdownTime`<sup>Required</sup> <a name="shutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime"></a>

```java
public java.lang.Number getShutdownTime();
```

- *Type:* java.lang.Number

---

##### `startupTime`<sup>Required</sup> <a name="startupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime"></a>

```java
public java.lang.Number getStartupTime();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue"></a>

```java
public ApplicationContainerManifest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---


### ApplicationContainerManifestReleaseOutputReference <a name="ApplicationContainerManifestReleaseOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifestReleaseOutputReference;

new ApplicationContainerManifestReleaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute"></a>

```java
public void resetBuildAttribute()
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput"></a>

```java
public java.lang.String getBuildAttributeInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue"></a>

```java
public ApplicationContainerManifestRelease getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---


### ApplicationContainerManifestRuntimeOutputReference <a name="ApplicationContainerManifestRuntimeOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerManifestRuntimeOutputReference;

new ApplicationContainerManifestRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput">majorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion">majorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `majorVersionInput`<sup>Optional</sup> <a name="majorVersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput"></a>

```java
public java.lang.String getMajorVersionInput();
```

- *Type:* java.lang.String

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion"></a>

```java
public java.lang.String getMajorVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue"></a>

```java
public ApplicationContainerManifestRuntime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---


### ApplicationContainerTimeoutsOutputReference <a name="ApplicationContainerTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.application_container.ApplicationContainerTimeoutsOutputReference;

new ApplicationContainerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



