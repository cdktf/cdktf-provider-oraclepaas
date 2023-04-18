# `oraclepaas_application_container`

Refer to the Terraform Registory for docs: [`oraclepaas_application_container`](https://www.terraform.io/docs/providers/oraclepaas/r/application_container).

# `applicationContainer` Submodule <a name="`applicationContainer` Submodule" id="@cdktf/provider-oraclepaas.applicationContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationContainer <a name="ApplicationContainer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container oraclepaas_application_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  archive_url: str = None,
  auth_type: str = None,
  availability_domain: typing.List[str] = None,
  deployment: ApplicationContainerDeployment = None,
  deployment_file: str = None,
  git_password: str = None,
  git_repository: str = None,
  git_username: str = None,
  id: str = None,
  load_balancer_subnets: typing.List[str] = None,
  manifest: ApplicationContainerManifest = None,
  manifest_file: str = None,
  notes: str = None,
  notification_email: str = None,
  region: str = None,
  runtime: str = None,
  subscription_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationContainerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.archiveUrl">archive_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deploymentFile">deployment_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitPassword">git_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitRepository">git_repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitUsername">git_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.loadBalancerSubnets">load_balancer_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifestFile">manifest_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}.

---

##### `archive_url`<sup>Optional</sup> <a name="archive_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.archiveUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.availabilityDomain"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment ApplicationContainer#deployment}

---

##### `deployment_file`<sup>Optional</sup> <a name="deployment_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.deploymentFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `git_password`<sup>Optional</sup> <a name="git_password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}.

---

##### `git_repository`<sup>Optional</sup> <a name="git_repository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitRepository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `git_username`<sup>Optional</sup> <a name="git_username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.gitUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_subnets`<sup>Optional</sup> <a name="load_balancer_subnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.loadBalancerSubnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifest"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest ApplicationContainer#manifest}

---

##### `manifest_file`<sup>Optional</sup> <a name="manifest_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.manifestFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.notificationEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}.

---

##### `subscription_type`<sup>Optional</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.subscriptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#timeouts ApplicationContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest">put_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl">reset_archive_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile">reset_deployment_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword">reset_git_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository">reset_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername">reset_git_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets">reset_load_balancer_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest">reset_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile">reset_manifest_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail">reset_notification_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType">reset_subscription_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_deployment` <a name="put_deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment"></a>

```python
def put_deployment(
  environment: typing.Mapping[str] = None,
  instances: typing.Union[int, float] = None,
  java_system_properties: typing.Mapping[str] = None,
  memory: str = None,
  notes: str = None,
  secure_environment: typing.List[str] = None,
  services: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]] = None
) -> None
```

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#environment ApplicationContainer#environment}.

---

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#instances ApplicationContainer#instances}.

---

###### `java_system_properties`<sup>Optional</sup> <a name="java_system_properties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.javaSystemProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#memory ApplicationContainer#memory}.

---

###### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

###### `secure_environment`<sup>Optional</sup> <a name="secure_environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.secureEnvironment"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#secure_environment ApplicationContainer#secure_environment}.

---

###### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.services"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]

services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#services ApplicationContainer#services}

---

##### `put_manifest` <a name="put_manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest"></a>

```python
def put_manifest(
  clustered: typing.Union[bool, IResolvable] = None,
  command: str = None,
  health_check_endpoint: str = None,
  home: str = None,
  mode: str = None,
  notes: str = None,
  release: ApplicationContainerManifestRelease = None,
  runtime: ApplicationContainerManifestRuntime = None,
  shutdown_time: typing.Union[int, float] = None,
  startup_time: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `clustered`<sup>Optional</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.clustered"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#clustered ApplicationContainer#clustered}.

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.command"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#command ApplicationContainer#command}.

---

###### `health_check_endpoint`<sup>Optional</sup> <a name="health_check_endpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.healthCheckEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

###### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.home"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#home ApplicationContainer#home}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#mode ApplicationContainer#mode}.

---

###### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

###### `release`<sup>Optional</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.release"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#release ApplicationContainer#release}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.runtime"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}

---

###### `shutdown_time`<sup>Optional</sup> <a name="shutdown_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.shutdownTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

###### `startup_time`<sup>Optional</sup> <a name="startup_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.startupTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#startup_time ApplicationContainer#startup_time}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#create ApplicationContainer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#delete ApplicationContainer#delete}.

---

##### `reset_archive_url` <a name="reset_archive_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl"></a>

```python
def reset_archive_url() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_availability_domain` <a name="reset_availability_domain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_deployment_file` <a name="reset_deployment_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile"></a>

```python
def reset_deployment_file() -> None
```

##### `reset_git_password` <a name="reset_git_password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword"></a>

```python
def reset_git_password() -> None
```

##### `reset_git_repository` <a name="reset_git_repository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository"></a>

```python
def reset_git_repository() -> None
```

##### `reset_git_username` <a name="reset_git_username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername"></a>

```python
def reset_git_username() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer_subnets` <a name="reset_load_balancer_subnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets"></a>

```python
def reset_load_balancer_subnets() -> None
```

##### `reset_manifest` <a name="reset_manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest"></a>

```python
def reset_manifest() -> None
```

##### `reset_manifest_file` <a name="reset_manifest_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile"></a>

```python
def reset_manifest_file() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_notification_email` <a name="reset_notification_email" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail"></a>

```python
def reset_notification_email() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_subscription_type` <a name="reset_subscription_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType"></a>

```python
def reset_subscription_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl">app_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput">archive_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput">availability_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput">deployment_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput">deployment_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput">git_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput">git_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput">git_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput">load_balancer_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput">manifest_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput">manifest_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput">notification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput">subscription_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl">archive_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain">availability_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile">deployment_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword">git_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository">git_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername">git_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets">load_balancer_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile">manifest_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail">notification_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_url`<sup>Required</sup> <a name="app_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl"></a>

```python
app_url: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment"></a>

```python
deployment: ApplicationContainerDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest"></a>

```python
manifest: ApplicationContainerManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts"></a>

```python
timeouts: ApplicationContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a>

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `archive_url_input`<sup>Optional</sup> <a name="archive_url_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput"></a>

```python
archive_url_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput"></a>

```python
availability_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_file_input`<sup>Optional</sup> <a name="deployment_file_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput"></a>

```python
deployment_file_input: str
```

- *Type:* str

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput"></a>

```python
deployment_input: ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `git_password_input`<sup>Optional</sup> <a name="git_password_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput"></a>

```python
git_password_input: str
```

- *Type:* str

---

##### `git_repository_input`<sup>Optional</sup> <a name="git_repository_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput"></a>

```python
git_repository_input: str
```

- *Type:* str

---

##### `git_username_input`<sup>Optional</sup> <a name="git_username_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput"></a>

```python
git_username_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_subnets_input`<sup>Optional</sup> <a name="load_balancer_subnets_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput"></a>

```python
load_balancer_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manifest_file_input`<sup>Optional</sup> <a name="manifest_file_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput"></a>

```python
manifest_file_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput"></a>

```python
manifest_input: ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `notification_email_input`<sup>Optional</sup> <a name="notification_email_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput"></a>

```python
notification_email_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `subscription_type_input`<sup>Optional</sup> <a name="subscription_type_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput"></a>

```python
subscription_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ApplicationContainerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>, cdktf.IResolvable]

---

##### `archive_url`<sup>Required</sup> <a name="archive_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl"></a>

```python
archive_url: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain"></a>

```python
availability_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_file`<sup>Required</sup> <a name="deployment_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile"></a>

```python
deployment_file: str
```

- *Type:* str

---

##### `git_password`<sup>Required</sup> <a name="git_password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword"></a>

```python
git_password: str
```

- *Type:* str

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository"></a>

```python
git_repository: str
```

- *Type:* str

---

##### `git_username`<sup>Required</sup> <a name="git_username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername"></a>

```python
git_username: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_subnets`<sup>Required</sup> <a name="load_balancer_subnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets"></a>

```python
load_balancer_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manifest_file`<sup>Required</sup> <a name="manifest_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile"></a>

```python
manifest_file: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationContainerConfig <a name="ApplicationContainerConfig" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  archive_url: str = None,
  auth_type: str = None,
  availability_domain: typing.List[str] = None,
  deployment: ApplicationContainerDeployment = None,
  deployment_file: str = None,
  git_password: str = None,
  git_repository: str = None,
  git_username: str = None,
  id: str = None,
  load_balancer_subnets: typing.List[str] = None,
  manifest: ApplicationContainerManifest = None,
  manifest_file: str = None,
  notes: str = None,
  notification_email: str = None,
  region: str = None,
  runtime: str = None,
  subscription_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationContainerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl">archive_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain">availability_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile">deployment_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword">git_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository">git_repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername">git_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets">load_balancer_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile">manifest_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}.

---

##### `archive_url`<sup>Optional</sup> <a name="archive_url" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl"></a>

```python
archive_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain"></a>

```python
availability_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment"></a>

```python
deployment: ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment ApplicationContainer#deployment}

---

##### `deployment_file`<sup>Optional</sup> <a name="deployment_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile"></a>

```python
deployment_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `git_password`<sup>Optional</sup> <a name="git_password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword"></a>

```python
git_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}.

---

##### `git_repository`<sup>Optional</sup> <a name="git_repository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository"></a>

```python
git_repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `git_username`<sup>Optional</sup> <a name="git_username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername"></a>

```python
git_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_subnets`<sup>Optional</sup> <a name="load_balancer_subnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets"></a>

```python
load_balancer_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest"></a>

```python
manifest: ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest ApplicationContainer#manifest}

---

##### `manifest_file`<sup>Optional</sup> <a name="manifest_file" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile"></a>

```python
manifest_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `notification_email`<sup>Optional</sup> <a name="notification_email" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}.

---

##### `subscription_type`<sup>Optional</sup> <a name="subscription_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts"></a>

```python
timeouts: ApplicationContainerTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#timeouts ApplicationContainer#timeouts}

---

### ApplicationContainerDeployment <a name="ApplicationContainerDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerDeployment(
  environment: typing.Mapping[str] = None,
  instances: typing.Union[int, float] = None,
  java_system_properties: typing.Mapping[str] = None,
  memory: str = None,
  notes: str = None,
  secure_environment: typing.List[str] = None,
  services: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#environment ApplicationContainer#environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#instances ApplicationContainer#instances}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties">java_system_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#java_system_properties ApplicationContainer#java_system_properties}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#memory ApplicationContainer#memory}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment">secure_environment</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#secure_environment ApplicationContainer#secure_environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services">services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]</code> | services block. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#environment ApplicationContainer#environment}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#instances ApplicationContainer#instances}.

---

##### `java_system_properties`<sup>Optional</sup> <a name="java_system_properties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties"></a>

```python
java_system_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#memory ApplicationContainer#memory}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `secure_environment`<sup>Optional</sup> <a name="secure_environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment"></a>

```python
secure_environment: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#secure_environment ApplicationContainer#secure_environment}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services"></a>

```python
services: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]

services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#services ApplicationContainer#services}

---

### ApplicationContainerDeploymentServices <a name="ApplicationContainerDeploymentServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerDeploymentServices(
  identifier: str,
  name: str,
  password: str,
  type: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#identifier ApplicationContainer#identifier}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#password ApplicationContainer#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#username ApplicationContainer#username}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#identifier ApplicationContainer#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#password ApplicationContainer#password}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#username ApplicationContainer#username}.

---

### ApplicationContainerManifest <a name="ApplicationContainerManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifest(
  clustered: typing.Union[bool, IResolvable] = None,
  command: str = None,
  health_check_endpoint: str = None,
  home: str = None,
  mode: str = None,
  notes: str = None,
  release: ApplicationContainerManifestRelease = None,
  runtime: ApplicationContainerManifestRuntime = None,
  shutdown_time: typing.Union[int, float] = None,
  startup_time: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered">clustered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#clustered ApplicationContainer#clustered}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command">command</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#command ApplicationContainer#command}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint">health_check_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#home ApplicationContainer#home}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#mode ApplicationContainer#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | release block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime">shutdown_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#shutdown_time ApplicationContainer#shutdown_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime">startup_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#startup_time ApplicationContainer#startup_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}. |

---

##### `clustered`<sup>Optional</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered"></a>

```python
clustered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#clustered ApplicationContainer#clustered}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command"></a>

```python
command: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#command ApplicationContainer#command}.

---

##### `health_check_endpoint`<sup>Optional</sup> <a name="health_check_endpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint"></a>

```python
health_check_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home"></a>

```python
home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#home ApplicationContainer#home}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#mode ApplicationContainer#mode}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release"></a>

```python
release: ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#release ApplicationContainer#release}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime"></a>

```python
runtime: ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}

---

##### `shutdown_time`<sup>Optional</sup> <a name="shutdown_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime"></a>

```python
shutdown_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

##### `startup_time`<sup>Optional</sup> <a name="startup_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime"></a>

```python
startup_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#startup_time ApplicationContainer#startup_time}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}.

---

### ApplicationContainerManifestRelease <a name="ApplicationContainerManifestRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifestRelease(
  build_attribute: str = None,
  commit: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute">build_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#build ApplicationContainer#build}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit">commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#commit ApplicationContainer#commit}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#version ApplicationContainer#version}. |

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute"></a>

```python
build_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#build ApplicationContainer#build}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit"></a>

```python
commit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#commit ApplicationContainer#commit}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#version ApplicationContainer#version}.

---

### ApplicationContainerManifestRuntime <a name="ApplicationContainerManifestRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifestRuntime(
  major_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion">major_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#major_version ApplicationContainer#major_version}. |

---

##### `major_version`<sup>Required</sup> <a name="major_version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion"></a>

```python
major_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#major_version ApplicationContainer#major_version}.

---

### ApplicationContainerTimeouts <a name="ApplicationContainerTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#create ApplicationContainer#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#delete ApplicationContainer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#create ApplicationContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#delete ApplicationContainer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationContainerDeploymentOutputReference <a name="ApplicationContainerDeploymentOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices">put_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties">reset_java_system_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment">reset_secure_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices">reset_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_services` <a name="put_services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices"></a>

```python
def put_services(
  value: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]

---

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_java_system_properties` <a name="reset_java_system_properties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties"></a>

```python
def reset_java_system_properties() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_secure_environment` <a name="reset_secure_environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment"></a>

```python
def reset_secure_environment() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices"></a>

```python
def reset_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services">services</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput">java_system_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput">secure_environment_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput">services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties">java_system_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment">secure_environment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services"></a>

```python
services: ApplicationContainerDeploymentServicesList
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `java_system_properties_input`<sup>Optional</sup> <a name="java_system_properties_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput"></a>

```python
java_system_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `secure_environment_input`<sup>Optional</sup> <a name="secure_environment_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput"></a>

```python
secure_environment_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput"></a>

```python
services_input: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `java_system_properties`<sup>Required</sup> <a name="java_system_properties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties"></a>

```python
java_system_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `secure_environment`<sup>Required</sup> <a name="secure_environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment"></a>

```python
secure_environment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---


### ApplicationContainerDeploymentServicesList <a name="ApplicationContainerDeploymentServicesList" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerDeploymentServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationContainerDeploymentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationContainerDeploymentServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>]]

---


### ApplicationContainerDeploymentServicesOutputReference <a name="ApplicationContainerDeploymentServicesOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerDeploymentServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApplicationContainerDeploymentServices, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>, cdktf.IResolvable]

---


### ApplicationContainerManifestOutputReference <a name="ApplicationContainerManifestOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease">put_release</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime">put_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered">reset_clustered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint">reset_health_check_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome">reset_home</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease">reset_release</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime">reset_shutdown_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime">reset_startup_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_release` <a name="put_release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease"></a>

```python
def put_release(
  build_attribute: str = None,
  commit: str = None,
  version: str = None
) -> None
```

###### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.buildAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#build ApplicationContainer#build}.

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.commit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#commit ApplicationContainer#commit}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#version ApplicationContainer#version}.

---

##### `put_runtime` <a name="put_runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime"></a>

```python
def put_runtime(
  major_version: str
) -> None
```

###### `major_version`<sup>Required</sup> <a name="major_version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime.parameter.majorVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#major_version ApplicationContainer#major_version}.

---

##### `reset_clustered` <a name="reset_clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered"></a>

```python
def reset_clustered() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_health_check_endpoint` <a name="reset_health_check_endpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint"></a>

```python
def reset_health_check_endpoint() -> None
```

##### `reset_home` <a name="reset_home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome"></a>

```python
def reset_home() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_release` <a name="reset_release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease"></a>

```python
def reset_release() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_shutdown_time` <a name="reset_shutdown_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime"></a>

```python
def reset_shutdown_time() -> None
```

##### `reset_startup_time` <a name="reset_startup_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime"></a>

```python
def reset_startup_time() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput">clustered_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput">command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput">health_check_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput">home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput">release_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput">runtime_input</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput">shutdown_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput">startup_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered">clustered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint">health_check_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home">home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime">shutdown_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime">startup_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release"></a>

```python
release: ApplicationContainerManifestReleaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime"></a>

```python
runtime: ApplicationContainerManifestRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a>

---

##### `clustered_input`<sup>Optional</sup> <a name="clustered_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput"></a>

```python
clustered_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput"></a>

```python
command_input: str
```

- *Type:* str

---

##### `health_check_endpoint_input`<sup>Optional</sup> <a name="health_check_endpoint_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput"></a>

```python
health_check_endpoint_input: str
```

- *Type:* str

---

##### `home_input`<sup>Optional</sup> <a name="home_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput"></a>

```python
home_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `release_input`<sup>Optional</sup> <a name="release_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput"></a>

```python
release_input: ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput"></a>

```python
runtime_input: ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `shutdown_time_input`<sup>Optional</sup> <a name="shutdown_time_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput"></a>

```python
shutdown_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `startup_time_input`<sup>Optional</sup> <a name="startup_time_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput"></a>

```python
startup_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `clustered`<sup>Required</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered"></a>

```python
clustered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `health_check_endpoint`<sup>Required</sup> <a name="health_check_endpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint"></a>

```python
health_check_endpoint: str
```

- *Type:* str

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home"></a>

```python
home: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `shutdown_time`<sup>Required</sup> <a name="shutdown_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime"></a>

```python
shutdown_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `startup_time`<sup>Required</sup> <a name="startup_time" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime"></a>

```python
startup_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---


### ApplicationContainerManifestReleaseOutputReference <a name="ApplicationContainerManifestReleaseOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifestReleaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute">reset_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_build_attribute` <a name="reset_build_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute"></a>

```python
def reset_build_attribute() -> None
```

##### `reset_commit` <a name="reset_commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput">build_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute">build_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_attribute_input`<sup>Optional</sup> <a name="build_attribute_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput"></a>

```python
build_attribute_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute"></a>

```python
build_attribute: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---


### ApplicationContainerManifestRuntimeOutputReference <a name="ApplicationContainerManifestRuntimeOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerManifestRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput">major_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion">major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `major_version_input`<sup>Optional</sup> <a name="major_version_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput"></a>

```python
major_version_input: str
```

- *Type:* str

---

##### `major_version`<sup>Required</sup> <a name="major_version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion"></a>

```python
major_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---


### ApplicationContainerTimeoutsOutputReference <a name="ApplicationContainerTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import application_container

applicationContainer.ApplicationContainerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApplicationContainerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>, cdktf.IResolvable]

---



