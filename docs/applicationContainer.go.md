# `oraclepaas_application_container`

Refer to the Terraform Registory for docs: [`oraclepaas_application_container`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container).

# `applicationContainer` Submodule <a name="`applicationContainer` Submodule" id="@cdktf/provider-oraclepaas.applicationContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationContainer <a name="ApplicationContainer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container oraclepaas_application_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainer(scope Construct, id *string, config ApplicationContainerConfig) ApplicationContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig">ApplicationContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig">ApplicationContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl">ResetArchiveUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile">ResetDeploymentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword">ResetGitPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername">ResetGitUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets">ResetLoadBalancerSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile">ResetManifestFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType">ResetSubscriptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment"></a>

```go
func PutDeployment(value ApplicationContainerDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest"></a>

```go
func PutManifest(value ApplicationContainerManifest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationContainerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

---

##### `ResetArchiveUrl` <a name="ResetArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl"></a>

```go
func ResetArchiveUrl()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDeploymentFile` <a name="ResetDeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile"></a>

```go
func ResetDeploymentFile()
```

##### `ResetGitPassword` <a name="ResetGitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword"></a>

```go
func ResetGitPassword()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository"></a>

```go
func ResetGitRepository()
```

##### `ResetGitUsername` <a name="ResetGitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername"></a>

```go
func ResetGitUsername()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerSubnets` <a name="ResetLoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets"></a>

```go
func ResetLoadBalancerSubnets()
```

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest"></a>

```go
func ResetManifest()
```

##### `ResetManifestFile` <a name="ResetManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile"></a>

```go
func ResetManifestFile()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail"></a>

```go
func ResetNotificationEmail()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSubscriptionType` <a name="ResetSubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType"></a>

```go
func ResetSubscriptionType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.ApplicationContainer_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.ApplicationContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.ApplicationContainer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.ApplicationContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl">AppUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput">ArchiveUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput">DeploymentFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput">GitPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput">GitUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput">LoadBalancerSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput">ManifestFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl">ArchiveUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile">DeploymentFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword">GitPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository">GitRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername">GitUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets">LoadBalancerSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile">ManifestFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppUrl`<sup>Required</sup> <a name="AppUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl"></a>

```go
func AppUrl() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment"></a>

```go
func Deployment() ApplicationContainerDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a>

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest"></a>

```go
func Manifest() ApplicationContainerManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts"></a>

```go
func Timeouts() ApplicationContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a>

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `ArchiveUrlInput`<sup>Optional</sup> <a name="ArchiveUrlInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput"></a>

```go
func ArchiveUrlInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentFileInput`<sup>Optional</sup> <a name="DeploymentFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput"></a>

```go
func DeploymentFileInput() *string
```

- *Type:* *string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput"></a>

```go
func DeploymentInput() ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `GitPasswordInput`<sup>Optional</sup> <a name="GitPasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput"></a>

```go
func GitPasswordInput() *string
```

- *Type:* *string

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput"></a>

```go
func GitRepositoryInput() *string
```

- *Type:* *string

---

##### `GitUsernameInput`<sup>Optional</sup> <a name="GitUsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput"></a>

```go
func GitUsernameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerSubnetsInput`<sup>Optional</sup> <a name="LoadBalancerSubnetsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput"></a>

```go
func LoadBalancerSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManifestFileInput`<sup>Optional</sup> <a name="ManifestFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput"></a>

```go
func ManifestFileInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput"></a>

```go
func ManifestInput() ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput"></a>

```go
func SubscriptionTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveUrl`<sup>Required</sup> <a name="ArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl"></a>

```go
func ArchiveUrl() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentFile`<sup>Required</sup> <a name="DeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile"></a>

```go
func DeploymentFile() *string
```

- *Type:* *string

---

##### `GitPassword`<sup>Required</sup> <a name="GitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword"></a>

```go
func GitPassword() *string
```

- *Type:* *string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository"></a>

```go
func GitRepository() *string
```

- *Type:* *string

---

##### `GitUsername`<sup>Required</sup> <a name="GitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername"></a>

```go
func GitUsername() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerSubnets`<sup>Required</sup> <a name="LoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets"></a>

```go
func LoadBalancerSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `ManifestFile`<sup>Required</sup> <a name="ManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile"></a>

```go
func ManifestFile() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationContainerConfig <a name="ApplicationContainerConfig" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ArchiveUrl: *string,
	AuthType: *string,
	AvailabilityDomain: *[]*string,
	Deployment: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.applicationContainer.ApplicationContainerDeployment,
	DeploymentFile: *string,
	GitPassword: *string,
	GitRepository: *string,
	GitUsername: *string,
	Id: *string,
	LoadBalancerSubnets: *[]*string,
	Manifest: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.applicationContainer.ApplicationContainerManifest,
	ManifestFile: *string,
	Notes: *string,
	NotificationEmail: *string,
	Region: *string,
	Runtime: *string,
	SubscriptionType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.applicationContainer.ApplicationContainerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl">ArchiveUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile">DeploymentFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword">GitPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository">GitRepository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername">GitUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets">LoadBalancerSubnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile">ManifestFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `ArchiveUrl`<sup>Optional</sup> <a name="ArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl"></a>

```go
ArchiveUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment"></a>

```go
Deployment ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment ApplicationContainer#deployment}

---

##### `DeploymentFile`<sup>Optional</sup> <a name="DeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile"></a>

```go
DeploymentFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `GitPassword`<sup>Optional</sup> <a name="GitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword"></a>

```go
GitPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository"></a>

```go
GitRepository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `GitUsername`<sup>Optional</sup> <a name="GitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername"></a>

```go
GitUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerSubnets`<sup>Optional</sup> <a name="LoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets"></a>

```go
LoadBalancerSubnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest"></a>

```go
Manifest ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest ApplicationContainer#manifest}

---

##### `ManifestFile`<sup>Optional</sup> <a name="ManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile"></a>

```go
ManifestFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}.

---

##### `SubscriptionType`<sup>Optional</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType"></a>

```go
SubscriptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts"></a>

```go
Timeouts ApplicationContainerTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#timeouts ApplicationContainer#timeouts}

---

### ApplicationContainerDeployment <a name="ApplicationContainerDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerDeployment {
	Environment: *map[string]*string,
	Instances: *f64,
	JavaSystemProperties: *map[string]*string,
	Memory: *string,
	Notes: *string,
	SecureEnvironment: *[]*string,
	Services: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances">Instances</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties">JavaSystemProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment">SecureEnvironment</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services">Services</a></code> | <code>interface{}</code> | services block. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}.

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}.

---

##### `JavaSystemProperties`<sup>Optional</sup> <a name="JavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties"></a>

```go
JavaSystemProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `SecureEnvironment`<sup>Optional</sup> <a name="SecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment"></a>

```go
SecureEnvironment *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services"></a>

```go
Services interface{}
```

- *Type:* interface{}

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#services ApplicationContainer#services}

---

### ApplicationContainerDeploymentServices <a name="ApplicationContainerDeploymentServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerDeploymentServices {
	Identifier: *string,
	Name: *string,
	Password: *string,
	Type: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}.

---

### ApplicationContainerManifest <a name="ApplicationContainerManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerManifest {
	Clustered: interface{},
	Command: *string,
	HealthCheckEndpoint: *string,
	Home: *string,
	Mode: *string,
	Notes: *string,
	Release: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.applicationContainer.ApplicationContainerManifestRelease,
	Runtime: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.applicationContainer.ApplicationContainerManifestRuntime,
	ShutdownTime: *f64,
	StartupTime: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered">Clustered</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command">Command</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint">HealthCheckEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home">Home</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release">Release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | release block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime">ShutdownTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime">StartupTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |

---

##### `Clustered`<sup>Optional</sup> <a name="Clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered"></a>

```go
Clustered interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command"></a>

```go
Command *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}.

---

##### `HealthCheckEndpoint`<sup>Optional</sup> <a name="HealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint"></a>

```go
HealthCheckEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home"></a>

```go
Home *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release"></a>

```go
Release ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#release ApplicationContainer#release}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime"></a>

```go
Runtime ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}

---

##### `ShutdownTime`<sup>Optional</sup> <a name="ShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime"></a>

```go
ShutdownTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

##### `StartupTime`<sup>Optional</sup> <a name="StartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime"></a>

```go
StartupTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

### ApplicationContainerManifestRelease <a name="ApplicationContainerManifestRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerManifestRelease {
	BuildAttribute: *string,
	Commit: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit">Commit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}. |

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute"></a>

```go
BuildAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit"></a>

```go
Commit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}.

---

### ApplicationContainerManifestRuntime <a name="ApplicationContainerManifestRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerManifestRuntime {
	MajorVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion">MajorVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}. |

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion"></a>

```go
MajorVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}.

---

### ApplicationContainerTimeouts <a name="ApplicationContainerTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

&applicationcontainer.ApplicationContainerTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationContainerDeploymentOutputReference <a name="ApplicationContainerDeploymentOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationContainerDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices">PutServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties">ResetJavaSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment">ResetSecureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServices` <a name="PutServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices"></a>

```go
func PutServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetJavaSystemProperties` <a name="ResetJavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties"></a>

```go
func ResetJavaSystemProperties()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetSecureEnvironment` <a name="ResetSecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment"></a>

```go
func ResetSecureEnvironment()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices"></a>

```go
func ResetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services">Services</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput">JavaSystemPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput">SecureEnvironmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput">ServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties">JavaSystemProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment">SecureEnvironment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services"></a>

```go
func Services() ApplicationContainerDeploymentServicesList
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `JavaSystemPropertiesInput`<sup>Optional</sup> <a name="JavaSystemPropertiesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput"></a>

```go
func JavaSystemPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `SecureEnvironmentInput`<sup>Optional</sup> <a name="SecureEnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput"></a>

```go
func SecureEnvironmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput"></a>

```go
func ServicesInput() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `JavaSystemProperties`<sup>Required</sup> <a name="JavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties"></a>

```go
func JavaSystemProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `SecureEnvironment`<sup>Required</sup> <a name="SecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment"></a>

```go
func SecureEnvironment() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationContainerDeployment
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---


### ApplicationContainerDeploymentServicesList <a name="ApplicationContainerDeploymentServicesList" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerDeploymentServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationContainerDeploymentServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get"></a>

```go
func Get(index *f64) ApplicationContainerDeploymentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationContainerDeploymentServicesOutputReference <a name="ApplicationContainerDeploymentServicesOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerDeploymentServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationContainerDeploymentServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationContainerManifestOutputReference <a name="ApplicationContainerManifestOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerManifestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationContainerManifestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease">PutRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime">PutRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered">ResetClustered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint">ResetHealthCheckEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome">ResetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime">ResetShutdownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime">ResetStartupTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelease` <a name="PutRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease"></a>

```go
func PutRelease(value ApplicationContainerManifestRelease)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime"></a>

```go
func PutRuntime(value ApplicationContainerManifestRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `ResetClustered` <a name="ResetClustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered"></a>

```go
func ResetClustered()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetHealthCheckEndpoint` <a name="ResetHealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint"></a>

```go
func ResetHealthCheckEndpoint()
```

##### `ResetHome` <a name="ResetHome" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome"></a>

```go
func ResetHome()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease"></a>

```go
func ResetRelease()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetShutdownTime` <a name="ResetShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime"></a>

```go
func ResetShutdownTime()
```

##### `ResetStartupTime` <a name="ResetStartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime"></a>

```go
func ResetStartupTime()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release">Release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput">ClusteredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput">CommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput">HealthCheckEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput">HomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput">ReleaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput">ShutdownTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput">StartupTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered">Clustered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint">HealthCheckEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home">Home</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime">ShutdownTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime">StartupTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release"></a>

```go
func Release() ApplicationContainerManifestReleaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime"></a>

```go
func Runtime() ApplicationContainerManifestRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a>

---

##### `ClusteredInput`<sup>Optional</sup> <a name="ClusteredInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput"></a>

```go
func ClusteredInput() interface{}
```

- *Type:* interface{}

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput"></a>

```go
func CommandInput() *string
```

- *Type:* *string

---

##### `HealthCheckEndpointInput`<sup>Optional</sup> <a name="HealthCheckEndpointInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput"></a>

```go
func HealthCheckEndpointInput() *string
```

- *Type:* *string

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput"></a>

```go
func HomeInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput"></a>

```go
func ReleaseInput() ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `ShutdownTimeInput`<sup>Optional</sup> <a name="ShutdownTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput"></a>

```go
func ShutdownTimeInput() *f64
```

- *Type:* *f64

---

##### `StartupTimeInput`<sup>Optional</sup> <a name="StartupTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput"></a>

```go
func StartupTimeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Clustered`<sup>Required</sup> <a name="Clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered"></a>

```go
func Clustered() interface{}
```

- *Type:* interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `HealthCheckEndpoint`<sup>Required</sup> <a name="HealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint"></a>

```go
func HealthCheckEndpoint() *string
```

- *Type:* *string

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home"></a>

```go
func Home() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `ShutdownTime`<sup>Required</sup> <a name="ShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime"></a>

```go
func ShutdownTime() *f64
```

- *Type:* *f64

---

##### `StartupTime`<sup>Required</sup> <a name="StartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime"></a>

```go
func StartupTime() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationContainerManifest
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---


### ApplicationContainerManifestReleaseOutputReference <a name="ApplicationContainerManifestReleaseOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerManifestReleaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationContainerManifestReleaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute"></a>

```go
func ResetBuildAttribute()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit"></a>

```go
func ResetCommit()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput">BuildAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput">CommitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit">Commit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() *string
```

- *Type:* *string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput"></a>

```go
func CommitInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit"></a>

```go
func Commit() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationContainerManifestRelease
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---


### ApplicationContainerManifestRuntimeOutputReference <a name="ApplicationContainerManifestRuntimeOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerManifestRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationContainerManifestRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput">MajorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion">MajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MajorVersionInput`<sup>Optional</sup> <a name="MajorVersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput"></a>

```go
func MajorVersionInput() *string
```

- *Type:* *string

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion"></a>

```go
func MajorVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationContainerManifestRuntime
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---


### ApplicationContainerTimeoutsOutputReference <a name="ApplicationContainerTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/applicationcontainer"

applicationcontainer.NewApplicationContainerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationContainerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



