# `oraclepaas_mysql_service_instance`

Refer to the Terraform Registory for docs: [`oraclepaas_mysql_service_instance`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance).

# `mysqlServiceInstance` Submodule <a name="`mysqlServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.mysqlServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlServiceInstance <a name="MysqlServiceInstance" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance oraclepaas_mysql_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.NewMysqlServiceInstance(scope Construct, id *string, config MysqlServiceInstanceConfig) MysqlServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig">MysqlServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig">MysqlServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups">PutBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration">PutMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination">ResetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups">ResetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency">ResetMeteringFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser">ResetVmUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutBackups` <a name="PutBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups"></a>

```go
func PutBackups(value MysqlServiceInstanceBackups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `PutMysqlConfiguration` <a name="PutMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration"></a>

```go
func PutMysqlConfiguration(value MysqlServiceInstanceMysqlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts"></a>

```go
func PutTimeouts(value MysqlServiceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetBackupDestination` <a name="ResetBackupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination"></a>

```go
func ResetBackupDestination()
```

##### `ResetBackups` <a name="ResetBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups"></a>

```go
func ResetBackups()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetMeteringFrequency` <a name="ResetMeteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency"></a>

```go
func ResetMeteringFrequency()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail"></a>

```go
func ResetNotificationEmail()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVmUser` <a name="ResetVmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser"></a>

```go
func ResetVmUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.MysqlServiceInstance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.MysqlServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.MysqlServiceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.MysqlServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MysqlServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MysqlServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MysqlServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MysqlServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion">BaseReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl">EmUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration">MysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput">BackupDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput">BackupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput">MeteringFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput">MysqlConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput">VmUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency">MeteringFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser">VmUser</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups"></a>

```go
func Backups() MysqlServiceInstanceBackupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a>

---

##### `BaseReleaseVersion`<sup>Required</sup> <a name="BaseReleaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion"></a>

```go
func BaseReleaseVersion() *string
```

- *Type:* *string

---

##### `EmUrl`<sup>Required</sup> <a name="EmUrl" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl"></a>

```go
func EmUrl() *string
```

- *Type:* *string

---

##### `MysqlConfiguration`<sup>Required</sup> <a name="MysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration"></a>

```go
func MysqlConfiguration() MysqlServiceInstanceMysqlConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a>

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion"></a>

```go
func ServiceVersion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts"></a>

```go
func Timeouts() MysqlServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `BackupDestinationInput`<sup>Optional</sup> <a name="BackupDestinationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput"></a>

```go
func BackupDestinationInput() *string
```

- *Type:* *string

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput"></a>

```go
func BackupsInput() MysqlServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `MeteringFrequencyInput`<sup>Optional</sup> <a name="MeteringFrequencyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput"></a>

```go
func MeteringFrequencyInput() *string
```

- *Type:* *string

---

##### `MysqlConfigurationInput`<sup>Optional</sup> <a name="MysqlConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput"></a>

```go
func MysqlConfigurationInput() MysqlServiceInstanceMysqlConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmUserInput`<sup>Optional</sup> <a name="VmUserInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput"></a>

```go
func VmUserInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination"></a>

```go
func BackupDestination() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `MeteringFrequency`<sup>Required</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency"></a>

```go
func MeteringFrequency() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `VmUser`<sup>Required</sup> <a name="VmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser"></a>

```go
func VmUser() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlServiceInstanceBackups <a name="MysqlServiceInstanceBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

&mysqlserviceinstance.MysqlServiceInstanceBackups {
	CloudStorageContainer: *string,
	CloudStoragePassword: *string,
	CloudStorageUsername: *string,
	CreateIfMissing: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing">CreateIfMissing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer"></a>

```go
CloudStorageContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword"></a>

```go
CloudStoragePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername"></a>

```go
CloudStorageUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}.

---

##### `CreateIfMissing`<sup>Optional</sup> <a name="CreateIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing"></a>

```go
CreateIfMissing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}.

---

### MysqlServiceInstanceConfig <a name="MysqlServiceInstanceConfig" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

&mysqlserviceinstance.MysqlServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MysqlConfiguration: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration,
	Name: *string,
	Shape: *string,
	SshPublicKey: *string,
	AvailabilityDomain: *string,
	BackupDestination: *string,
	Backups: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.mysqlServiceInstance.MysqlServiceInstanceBackups,
	Description: *string,
	Id: *string,
	IpNetwork: *string,
	MeteringFrequency: *string,
	NotificationEmail: *string,
	Region: *string,
	Subnet: *string,
	Timeouts: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.mysqlServiceInstance.MysqlServiceInstanceTimeouts,
	VmUser: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration">MysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | mysql_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#name MysqlServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#shape MysqlServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#description MysqlServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#id MysqlServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency">MeteringFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#region MysqlServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet">Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#subnet MysqlServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser">VmUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MysqlConfiguration`<sup>Required</sup> <a name="MysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration"></a>

```go
MysqlConfiguration MysqlServiceInstanceMysqlConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

mysql_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_configuration MysqlServiceInstance#mysql_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#name MysqlServiceInstance#name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#shape MysqlServiceInstance#shape}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}.

---

##### `BackupDestination`<sup>Optional</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination"></a>

```go
BackupDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}.

---

##### `Backups`<sup>Optional</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups"></a>

```go
Backups MysqlServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backups MysqlServiceInstance#backups}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#description MysqlServiceInstance#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#id MysqlServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}.

---

##### `MeteringFrequency`<sup>Optional</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency"></a>

```go
MeteringFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#region MysqlServiceInstance#region}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#subnet MysqlServiceInstance#subnet}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts"></a>

```go
Timeouts MysqlServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#timeouts MysqlServiceInstance#timeouts}

---

##### `VmUser`<sup>Optional</sup> <a name="VmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser"></a>

```go
VmUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}.

---

### MysqlServiceInstanceMysqlConfiguration <a name="MysqlServiceInstanceMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

&mysqlserviceinstance.MysqlServiceInstanceMysqlConfiguration {
	DbName: *string,
	DbStorage: *f64,
	EnterpriseMonitorConfiguration: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration,
	MysqlCharset: *string,
	MysqlCollation: *string,
	MysqlPassword: *string,
	MysqlPort: *f64,
	MysqlUsername: *string,
	SnapshotName: *string,
	SourceServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName">DbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_name MysqlServiceInstance#db_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage">DbStorage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration">EnterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | enterprise_monitor_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset">MysqlCharset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation">MysqlCollation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword">MysqlPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort">MysqlPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername">MysqlUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}. |

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_name MysqlServiceInstance#db_name}.

---

##### `DbStorage`<sup>Optional</sup> <a name="DbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage"></a>

```go
DbStorage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}.

---

##### `EnterpriseMonitorConfiguration`<sup>Optional</sup> <a name="EnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration"></a>

```go
EnterpriseMonitorConfiguration MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

enterprise_monitor_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#enterprise_monitor_configuration MysqlServiceInstance#enterprise_monitor_configuration}

---

##### `MysqlCharset`<sup>Optional</sup> <a name="MysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset"></a>

```go
MysqlCharset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}.

---

##### `MysqlCollation`<sup>Optional</sup> <a name="MysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation"></a>

```go
MysqlCollation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}.

---

##### `MysqlPassword`<sup>Optional</sup> <a name="MysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword"></a>

```go
MysqlPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}.

---

##### `MysqlPort`<sup>Optional</sup> <a name="MysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort"></a>

```go
MysqlPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}.

---

##### `MysqlUsername`<sup>Optional</sup> <a name="MysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername"></a>

```go
MysqlUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}.

---

##### `SourceServiceName`<sup>Optional</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName"></a>

```go
SourceServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}.

---

### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

&mysqlserviceinstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration {
	EmAgentPassword: *string,
	EmAgentUsername: *string,
	EmPassword: *string,
	EmPort: *f64,
	EmUsername: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword">EmAgentPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername">EmAgentUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword">EmPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_password MysqlServiceInstance#em_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort">EmPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_port MysqlServiceInstance#em_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername">EmUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_username MysqlServiceInstance#em_username}. |

---

##### `EmAgentPassword`<sup>Optional</sup> <a name="EmAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword"></a>

```go
EmAgentPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}.

---

##### `EmAgentUsername`<sup>Optional</sup> <a name="EmAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername"></a>

```go
EmAgentUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}.

---

##### `EmPassword`<sup>Optional</sup> <a name="EmPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword"></a>

```go
EmPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_password MysqlServiceInstance#em_password}.

---

##### `EmPort`<sup>Optional</sup> <a name="EmPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort"></a>

```go
EmPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_port MysqlServiceInstance#em_port}.

---

##### `EmUsername`<sup>Optional</sup> <a name="EmUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername"></a>

```go
EmUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_username MysqlServiceInstance#em_username}.

---

### MysqlServiceInstanceTimeouts <a name="MysqlServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

&mysqlserviceinstance.MysqlServiceInstanceTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create MysqlServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#delete MysqlServiceInstance#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create MysqlServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#delete MysqlServiceInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlServiceInstanceBackupsOutputReference <a name="MysqlServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.NewMysqlServiceInstanceBackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlServiceInstanceBackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword">ResetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername">ResetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing">ResetCreateIfMissing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```go
func ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```go
func ResetCloudStorageUsername()
```

##### `ResetCreateIfMissing` <a name="ResetCreateIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```go
func ResetCreateIfMissing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput">CreateIfMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing">CreateIfMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```go
func CloudStorageContainerInput() *string
```

- *Type:* *string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```go
func CloudStoragePasswordInput() *string
```

- *Type:* *string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```go
func CloudStorageUsernameInput() *string
```

- *Type:* *string

---

##### `CreateIfMissingInput`<sup>Optional</sup> <a name="CreateIfMissingInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```go
func CreateIfMissingInput() interface{}
```

- *Type:* interface{}

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```go
func CloudStoragePassword() *string
```

- *Type:* *string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```go
func CloudStorageUsername() *string
```

- *Type:* *string

---

##### `CreateIfMissing`<sup>Required</sup> <a name="CreateIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```go
func CreateIfMissing() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() MysqlServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---


### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.NewMysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword">ResetEmAgentPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername">ResetEmAgentUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword">ResetEmPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort">ResetEmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername">ResetEmUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmAgentPassword` <a name="ResetEmAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword"></a>

```go
func ResetEmAgentPassword()
```

##### `ResetEmAgentUsername` <a name="ResetEmAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername"></a>

```go
func ResetEmAgentUsername()
```

##### `ResetEmPassword` <a name="ResetEmPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword"></a>

```go
func ResetEmPassword()
```

##### `ResetEmPort` <a name="ResetEmPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort"></a>

```go
func ResetEmPort()
```

##### `ResetEmUsername` <a name="ResetEmUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername"></a>

```go
func ResetEmUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput">EmAgentPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput">EmAgentUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput">EmPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput">EmPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput">EmUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword">EmAgentPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername">EmAgentUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword">EmPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort">EmPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername">EmUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmAgentPasswordInput`<sup>Optional</sup> <a name="EmAgentPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput"></a>

```go
func EmAgentPasswordInput() *string
```

- *Type:* *string

---

##### `EmAgentUsernameInput`<sup>Optional</sup> <a name="EmAgentUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput"></a>

```go
func EmAgentUsernameInput() *string
```

- *Type:* *string

---

##### `EmPasswordInput`<sup>Optional</sup> <a name="EmPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput"></a>

```go
func EmPasswordInput() *string
```

- *Type:* *string

---

##### `EmPortInput`<sup>Optional</sup> <a name="EmPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput"></a>

```go
func EmPortInput() *f64
```

- *Type:* *f64

---

##### `EmUsernameInput`<sup>Optional</sup> <a name="EmUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput"></a>

```go
func EmUsernameInput() *string
```

- *Type:* *string

---

##### `EmAgentPassword`<sup>Required</sup> <a name="EmAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword"></a>

```go
func EmAgentPassword() *string
```

- *Type:* *string

---

##### `EmAgentUsername`<sup>Required</sup> <a name="EmAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername"></a>

```go
func EmAgentUsername() *string
```

- *Type:* *string

---

##### `EmPassword`<sup>Required</sup> <a name="EmPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword"></a>

```go
func EmPassword() *string
```

- *Type:* *string

---

##### `EmPort`<sup>Required</sup> <a name="EmPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort"></a>

```go
func EmPort() *f64
```

- *Type:* *f64

---

##### `EmUsername`<sup>Required</sup> <a name="EmUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername"></a>

```go
func EmUsername() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---


### MysqlServiceInstanceMysqlConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.NewMysqlServiceInstanceMysqlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlServiceInstanceMysqlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration">PutEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage">ResetDbStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration">ResetEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset">ResetMysqlCharset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation">ResetMysqlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword">ResetMysqlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort">ResetMysqlPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername">ResetMysqlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName">ResetSourceServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnterpriseMonitorConfiguration` <a name="PutEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration"></a>

```go
func PutEnterpriseMonitorConfiguration(value MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDbStorage` <a name="ResetDbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage"></a>

```go
func ResetDbStorage()
```

##### `ResetEnterpriseMonitorConfiguration` <a name="ResetEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration"></a>

```go
func ResetEnterpriseMonitorConfiguration()
```

##### `ResetMysqlCharset` <a name="ResetMysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset"></a>

```go
func ResetMysqlCharset()
```

##### `ResetMysqlCollation` <a name="ResetMysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation"></a>

```go
func ResetMysqlCollation()
```

##### `ResetMysqlPassword` <a name="ResetMysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword"></a>

```go
func ResetMysqlPassword()
```

##### `ResetMysqlPort` <a name="ResetMysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort"></a>

```go
func ResetMysqlPort()
```

##### `ResetMysqlUsername` <a name="ResetMysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername"></a>

```go
func ResetMysqlUsername()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSourceServiceName` <a name="ResetSourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName"></a>

```go
func ResetSourceServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString">ConnectString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration">EnterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput">DbStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput">EnterpriseMonitorConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput">MysqlCharsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput">MysqlCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput">MysqlPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput">MysqlPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput">MysqlUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput">SourceServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage">DbStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset">MysqlCharset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation">MysqlCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword">MysqlPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort">MysqlPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername">MysqlUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectString`<sup>Required</sup> <a name="ConnectString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString"></a>

```go
func ConnectString() *string
```

- *Type:* *string

---

##### `EnterpriseMonitorConfiguration`<sup>Required</sup> <a name="EnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration"></a>

```go
func EnterpriseMonitorConfiguration() MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbStorageInput`<sup>Optional</sup> <a name="DbStorageInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput"></a>

```go
func DbStorageInput() *f64
```

- *Type:* *f64

---

##### `EnterpriseMonitorConfigurationInput`<sup>Optional</sup> <a name="EnterpriseMonitorConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput"></a>

```go
func EnterpriseMonitorConfigurationInput() MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `MysqlCharsetInput`<sup>Optional</sup> <a name="MysqlCharsetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput"></a>

```go
func MysqlCharsetInput() *string
```

- *Type:* *string

---

##### `MysqlCollationInput`<sup>Optional</sup> <a name="MysqlCollationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput"></a>

```go
func MysqlCollationInput() *string
```

- *Type:* *string

---

##### `MysqlPasswordInput`<sup>Optional</sup> <a name="MysqlPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput"></a>

```go
func MysqlPasswordInput() *string
```

- *Type:* *string

---

##### `MysqlPortInput`<sup>Optional</sup> <a name="MysqlPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput"></a>

```go
func MysqlPortInput() *f64
```

- *Type:* *f64

---

##### `MysqlUsernameInput`<sup>Optional</sup> <a name="MysqlUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput"></a>

```go
func MysqlUsernameInput() *string
```

- *Type:* *string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SourceServiceNameInput`<sup>Optional</sup> <a name="SourceServiceNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput"></a>

```go
func SourceServiceNameInput() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbStorage`<sup>Required</sup> <a name="DbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage"></a>

```go
func DbStorage() *f64
```

- *Type:* *f64

---

##### `MysqlCharset`<sup>Required</sup> <a name="MysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset"></a>

```go
func MysqlCharset() *string
```

- *Type:* *string

---

##### `MysqlCollation`<sup>Required</sup> <a name="MysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation"></a>

```go
func MysqlCollation() *string
```

- *Type:* *string

---

##### `MysqlPassword`<sup>Required</sup> <a name="MysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword"></a>

```go
func MysqlPassword() *string
```

- *Type:* *string

---

##### `MysqlPort`<sup>Required</sup> <a name="MysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort"></a>

```go
func MysqlPort() *f64
```

- *Type:* *f64

---

##### `MysqlUsername`<sup>Required</sup> <a name="MysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername"></a>

```go
func MysqlUsername() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SourceServiceName`<sup>Required</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName"></a>

```go
func SourceServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MysqlServiceInstanceMysqlConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---


### MysqlServiceInstanceTimeoutsOutputReference <a name="MysqlServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/mysqlserviceinstance"

mysqlserviceinstance.NewMysqlServiceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlServiceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



