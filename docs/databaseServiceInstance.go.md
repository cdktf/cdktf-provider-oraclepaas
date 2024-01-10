# `databaseServiceInstance` Submodule <a name="`databaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.databaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseServiceInstance <a name="DatabaseServiceInstance" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstance(scope Construct, id *string, config DatabaseServiceInstanceConfig) DatabaseServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig">DatabaseServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig">DatabaseServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups">PutBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration">PutDatabaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules">PutDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery">PutHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup">PutInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby">PutStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups">ResetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense">ResetBringYourOwnLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules">ResetDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage">ResetHighPerformanceStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery">ResetHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup">ResetInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations">ResetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby">ResetStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackups` <a name="PutBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups"></a>

```go
func PutBackups(value DatabaseServiceInstanceBackups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---

##### `PutDatabaseConfiguration` <a name="PutDatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration"></a>

```go
func PutDatabaseConfiguration(value DatabaseServiceInstanceDatabaseConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDatabaseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---

##### `PutDefaultAccessRules` <a name="PutDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules"></a>

```go
func PutDefaultAccessRules(value DatabaseServiceInstanceDefaultAccessRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putDefaultAccessRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---

##### `PutHybridDisasterRecovery` <a name="PutHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery"></a>

```go
func PutHybridDisasterRecovery(value DatabaseServiceInstanceHybridDisasterRecovery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putHybridDisasterRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---

##### `PutInstantiateFromBackup` <a name="PutInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup"></a>

```go
func PutInstantiateFromBackup(value DatabaseServiceInstanceInstantiateFromBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putInstantiateFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---

##### `PutStandby` <a name="PutStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby"></a>

```go
func PutStandby(value DatabaseServiceInstanceStandby)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putStandby.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseServiceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetBackups` <a name="ResetBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBackups"></a>

```go
func ResetBackups()
```

##### `ResetBringYourOwnLicense` <a name="ResetBringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetBringYourOwnLicense"></a>

```go
func ResetBringYourOwnLicense()
```

##### `ResetDefaultAccessRules` <a name="ResetDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDefaultAccessRules"></a>

```go
func ResetDefaultAccessRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetHighPerformanceStorage` <a name="ResetHighPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHighPerformanceStorage"></a>

```go
func ResetHighPerformanceStorage()
```

##### `ResetHybridDisasterRecovery` <a name="ResetHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetHybridDisasterRecovery"></a>

```go
func ResetHybridDisasterRecovery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstantiateFromBackup` <a name="ResetInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetInstantiateFromBackup"></a>

```go
func ResetInstantiateFromBackup()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetIpReservations` <a name="ResetIpReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetIpReservations"></a>

```go
func ResetIpReservations()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetNotificationEmail"></a>

```go
func ResetNotificationEmail()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStandby` <a name="ResetStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetStandby"></a>

```go
func ResetStandby()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.DatabaseServiceInstance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.DatabaseServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.DatabaseServiceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.DatabaseServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName">ComputeSiteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl">DbaasMonitorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules">DefaultAccessRules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl">EmUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl">GlassfishUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery">HybridDisasterRecovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup">InstantiateFromBackup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby">Standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput">BackupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput">BringYourOwnLicenseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput">DatabaseConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput">DefaultAccessRulesInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput">HighPerformanceStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput">HybridDisasterRecoveryInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput">InstantiateFromBackupInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput">IpReservationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput">StandbyInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage">HighPerformanceStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backups"></a>

```go
func Backups() DatabaseServiceInstanceBackupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference">DatabaseServiceInstanceBackupsOutputReference</a>

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `ComputeSiteName`<sup>Required</sup> <a name="ComputeSiteName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.computeSiteName"></a>

```go
func ComputeSiteName() *string
```

- *Type:* *string

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfiguration"></a>

```go
func DatabaseConfiguration() DatabaseServiceInstanceDatabaseConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference">DatabaseServiceInstanceDatabaseConfigurationOutputReference</a>

---

##### `DbaasMonitorUrl`<sup>Required</sup> <a name="DbaasMonitorUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.dbaasMonitorUrl"></a>

```go
func DbaasMonitorUrl() *string
```

- *Type:* *string

---

##### `DefaultAccessRules`<sup>Required</sup> <a name="DefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRules"></a>

```go
func DefaultAccessRules() DatabaseServiceInstanceDefaultAccessRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference">DatabaseServiceInstanceDefaultAccessRulesOutputReference</a>

---

##### `EmUrl`<sup>Required</sup> <a name="EmUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.emUrl"></a>

```go
func EmUrl() *string
```

- *Type:* *string

---

##### `GlassfishUrl`<sup>Required</sup> <a name="GlassfishUrl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.glassfishUrl"></a>

```go
func GlassfishUrl() *string
```

- *Type:* *string

---

##### `HybridDisasterRecovery`<sup>Required</sup> <a name="HybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecovery"></a>

```go
func HybridDisasterRecovery() DatabaseServiceInstanceHybridDisasterRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference">DatabaseServiceInstanceHybridDisasterRecoveryOutputReference</a>

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.identityDomain"></a>

```go
func IdentityDomain() *string
```

- *Type:* *string

---

##### `InstantiateFromBackup`<sup>Required</sup> <a name="InstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackup"></a>

```go
func InstantiateFromBackup() DatabaseServiceInstanceInstantiateFromBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference">DatabaseServiceInstanceInstantiateFromBackupOutputReference</a>

---

##### `Standby`<sup>Required</sup> <a name="Standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standby"></a>

```go
func Standby() DatabaseServiceInstanceStandbyOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference">DatabaseServiceInstanceStandbyOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeouts"></a>

```go
func Timeouts() DatabaseServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference">DatabaseServiceInstanceTimeoutsOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.backupsInput"></a>

```go
func BackupsInput() DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---

##### `BringYourOwnLicenseInput`<sup>Optional</sup> <a name="BringYourOwnLicenseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicenseInput"></a>

```go
func BringYourOwnLicenseInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseConfigurationInput`<sup>Optional</sup> <a name="DatabaseConfigurationInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.databaseConfigurationInput"></a>

```go
func DatabaseConfigurationInput() DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---

##### `DefaultAccessRulesInput`<sup>Optional</sup> <a name="DefaultAccessRulesInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.defaultAccessRulesInput"></a>

```go
func DefaultAccessRulesInput() DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `HighPerformanceStorageInput`<sup>Optional</sup> <a name="HighPerformanceStorageInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorageInput"></a>

```go
func HighPerformanceStorageInput() interface{}
```

- *Type:* interface{}

---

##### `HybridDisasterRecoveryInput`<sup>Optional</sup> <a name="HybridDisasterRecoveryInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.hybridDisasterRecoveryInput"></a>

```go
func HybridDisasterRecoveryInput() DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstantiateFromBackupInput`<sup>Optional</sup> <a name="InstantiateFromBackupInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.instantiateFromBackupInput"></a>

```go
func InstantiateFromBackupInput() DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `IpReservationsInput`<sup>Optional</sup> <a name="IpReservationsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservationsInput"></a>

```go
func IpReservationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `StandbyInput`<sup>Optional</sup> <a name="StandbyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.standbyInput"></a>

```go
func StandbyInput() DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionTypeInput"></a>

```go
func SubscriptionTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BringYourOwnLicense`<sup>Required</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.bringYourOwnLicense"></a>

```go
func BringYourOwnLicense() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `HighPerformanceStorage`<sup>Required</sup> <a name="HighPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.highPerformanceStorage"></a>

```go
func HighPerformanceStorage() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.ipReservations"></a>

```go
func IpReservations() *[]*string
```

- *Type:* *[]*string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseServiceInstanceBackups <a name="DatabaseServiceInstanceBackups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceBackups {
	CloudStorageContainer: *string,
	CloudStoragePassword: *string,
	CloudStorageUsername: *string,
	CreateIfMissing: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing">CreateIfMissing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageContainer"></a>

```go
CloudStorageContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStoragePassword"></a>

```go
CloudStoragePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.cloudStorageUsername"></a>

```go
CloudStorageUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `CreateIfMissing`<sup>Optional</sup> <a name="CreateIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups.property.createIfMissing"></a>

```go
CreateIfMissing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create_if_missing DatabaseServiceInstance#create_if_missing}.

---

### DatabaseServiceInstanceConfig <a name="DatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseConfiguration: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration,
	Edition: *string,
	Name: *string,
	Shape: *string,
	SshPublicKey: *string,
	SubscriptionType: *string,
	Version: *string,
	AvailabilityDomain: *string,
	Backups: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups,
	BringYourOwnLicense: interface{},
	DefaultAccessRules: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules,
	Description: *string,
	DesiredState: *string,
	HighPerformanceStorage: interface{},
	HybridDisasterRecovery: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery,
	Id: *string,
	InstantiateFromBackup: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup,
	IpNetwork: *string,
	IpReservations: *[]*string,
	Level: *string,
	NotificationEmail: *string,
	Region: *string,
	Standby: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby,
	Subnet: *string,
	Timeouts: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | database_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules">DefaultAccessRules</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | default_access_rules block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage">HighPerformanceStorage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery">HybridDisasterRecovery</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | hybrid_disaster_recovery block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup">InstantiateFromBackup</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | instantiate_from_backup block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby">Standby</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | standby block. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet">Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.databaseConfiguration"></a>

```go
DatabaseConfiguration DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

database_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_configuration DatabaseServiceInstance#database_configuration}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#edition DatabaseServiceInstance#edition}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#name DatabaseServiceInstance#name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#shape DatabaseServiceInstance#shape}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ssh_public_key DatabaseServiceInstance#ssh_public_key}.

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subscriptionType"></a>

```go
SubscriptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subscription_type DatabaseServiceInstance#subscription_type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#version DatabaseServiceInstance#version}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `Backups`<sup>Optional</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.backups"></a>

```go
Backups DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backups DatabaseServiceInstance#backups}

---

##### `BringYourOwnLicense`<sup>Optional</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.bringYourOwnLicense"></a>

```go
BringYourOwnLicense interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#bring_your_own_license DatabaseServiceInstance#bring_your_own_license}.

---

##### `DefaultAccessRules`<sup>Optional</sup> <a name="DefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.defaultAccessRules"></a>

```go
DefaultAccessRules DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

default_access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#default_access_rules DatabaseServiceInstance#default_access_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#description DatabaseServiceInstance#description}.

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#desired_state DatabaseServiceInstance#desired_state}.

---

##### `HighPerformanceStorage`<sup>Optional</sup> <a name="HighPerformanceStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.highPerformanceStorage"></a>

```go
HighPerformanceStorage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#high_performance_storage DatabaseServiceInstance#high_performance_storage}.

---

##### `HybridDisasterRecovery`<sup>Optional</sup> <a name="HybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.hybridDisasterRecovery"></a>

```go
HybridDisasterRecovery DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

hybrid_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#hybrid_disaster_recovery DatabaseServiceInstance#hybrid_disaster_recovery}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#id DatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstantiateFromBackup`<sup>Optional</sup> <a name="InstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.instantiateFromBackup"></a>

```go
InstantiateFromBackup DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

instantiate_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#instantiate_from_backup DatabaseServiceInstance#instantiate_from_backup}

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_network DatabaseServiceInstance#ip_network}.

---

##### `IpReservations`<sup>Optional</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.ipReservations"></a>

```go
IpReservations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#ip_reservations DatabaseServiceInstance#ip_reservations}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#level DatabaseServiceInstance#level}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#notification_email DatabaseServiceInstance#notification_email}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#region DatabaseServiceInstance#region}.

---

##### `Standby`<sup>Optional</sup> <a name="Standby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.standby"></a>

```go
Standby DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

standby block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#standby DatabaseServiceInstance#standby}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceConfig.property.timeouts"></a>

```go
Timeouts DatabaseServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts">DatabaseServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timeouts DatabaseServiceInstance#timeouts}

---

### DatabaseServiceInstanceDatabaseConfiguration <a name="DatabaseServiceInstanceDatabaseConfiguration" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceDatabaseConfiguration {
	AdminPassword: *string,
	UsableStorage: *f64,
	BackupDestination: *string,
	BackupStorageVolumeSize: *f64,
	CharacterSet: *string,
	DataStorageVolumeSize: *f64,
	DbDemo: *string,
	DisasterRecovery: interface{},
	FailoverDatabase: interface{},
	GoldenGate: interface{},
	IsRac: interface{},
	NationalCharacterSet: *string,
	PdbName: *string,
	Sid: *string,
	SnapshotName: *string,
	SourceServiceName: *string,
	Timezone: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage">UsableStorage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize">BackupStorageVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize">DataStorageVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo">DbDemo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery">DisasterRecovery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase">FailoverDatabase</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate">GoldenGate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac">IsRac</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid">Sid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#admin_password DatabaseServiceInstance#admin_password}.

---

##### `UsableStorage`<sup>Required</sup> <a name="UsableStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.usableStorage"></a>

```go
UsableStorage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#usable_storage DatabaseServiceInstance#usable_storage}.

---

##### `BackupDestination`<sup>Optional</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupDestination"></a>

```go
BackupDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_destination DatabaseServiceInstance#backup_destination}.

---

##### `BackupStorageVolumeSize`<sup>Optional</sup> <a name="BackupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.backupStorageVolumeSize"></a>

```go
BackupStorageVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#backup_storage_volume_size DatabaseServiceInstance#backup_storage_volume_size}.

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#character_set DatabaseServiceInstance#character_set}.

---

##### `DataStorageVolumeSize`<sup>Optional</sup> <a name="DataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dataStorageVolumeSize"></a>

```go
DataStorageVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#data_storage_volume_size DatabaseServiceInstance#data_storage_volume_size}.

---

##### `DbDemo`<sup>Optional</sup> <a name="DbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.dbDemo"></a>

```go
DbDemo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#db_demo DatabaseServiceInstance#db_demo}.

---

##### `DisasterRecovery`<sup>Optional</sup> <a name="DisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.disasterRecovery"></a>

```go
DisasterRecovery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#disaster_recovery DatabaseServiceInstance#disaster_recovery}.

---

##### `FailoverDatabase`<sup>Optional</sup> <a name="FailoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.failoverDatabase"></a>

```go
FailoverDatabase interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#failover_database DatabaseServiceInstance#failover_database}.

---

##### `GoldenGate`<sup>Optional</sup> <a name="GoldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.goldenGate"></a>

```go
GoldenGate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#golden_gate DatabaseServiceInstance#golden_gate}.

---

##### `IsRac`<sup>Optional</sup> <a name="IsRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.isRac"></a>

```go
IsRac interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#is_rac DatabaseServiceInstance#is_rac}.

---

##### `NationalCharacterSet`<sup>Optional</sup> <a name="NationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.nationalCharacterSet"></a>

```go
NationalCharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#national_character_set DatabaseServiceInstance#national_character_set}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#pdb_name DatabaseServiceInstance#pdb_name}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sid"></a>

```go
Sid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#sid DatabaseServiceInstance#sid}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#snapshot_name DatabaseServiceInstance#snapshot_name}.

---

##### `SourceServiceName`<sup>Optional</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.sourceServiceName"></a>

```go
SourceServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#source_service_name DatabaseServiceInstance#source_service_name}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#timezone DatabaseServiceInstance#timezone}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#type DatabaseServiceInstance#type}.

---

### DatabaseServiceInstanceDefaultAccessRules <a name="DatabaseServiceInstanceDefaultAccessRules" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceDefaultAccessRules {
	EnableDbConsole: interface{},
	EnableDbExpress: interface{},
	EnableDbListener: interface{},
	EnableEmConsole: interface{},
	EnableHttp: interface{},
	EnableHttpSsl: interface{},
	EnableRacDbListener: interface{},
	EnableRacOns: interface{},
	EnableScanListener: interface{},
	EnableSsh: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole">EnableDbConsole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress">EnableDbExpress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener">EnableDbListener</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole">EnableEmConsole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp">EnableHttp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl">EnableHttpSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener">EnableRacDbListener</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns">EnableRacOns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener">EnableScanListener</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh">EnableSsh</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}. |

---

##### `EnableDbConsole`<sup>Optional</sup> <a name="EnableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbConsole"></a>

```go
EnableDbConsole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_console DatabaseServiceInstance#enable_db_console}.

---

##### `EnableDbExpress`<sup>Optional</sup> <a name="EnableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbExpress"></a>

```go
EnableDbExpress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_express DatabaseServiceInstance#enable_db_express}.

---

##### `EnableDbListener`<sup>Optional</sup> <a name="EnableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableDbListener"></a>

```go
EnableDbListener interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_db_listener DatabaseServiceInstance#enable_db_listener}.

---

##### `EnableEmConsole`<sup>Optional</sup> <a name="EnableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableEmConsole"></a>

```go
EnableEmConsole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_em_console DatabaseServiceInstance#enable_em_console}.

---

##### `EnableHttp`<sup>Optional</sup> <a name="EnableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttp"></a>

```go
EnableHttp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http DatabaseServiceInstance#enable_http}.

---

##### `EnableHttpSsl`<sup>Optional</sup> <a name="EnableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableHttpSsl"></a>

```go
EnableHttpSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_http_ssl DatabaseServiceInstance#enable_http_ssl}.

---

##### `EnableRacDbListener`<sup>Optional</sup> <a name="EnableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacDbListener"></a>

```go
EnableRacDbListener interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_db_listener DatabaseServiceInstance#enable_rac_db_listener}.

---

##### `EnableRacOns`<sup>Optional</sup> <a name="EnableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableRacOns"></a>

```go
EnableRacOns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_rac_ons DatabaseServiceInstance#enable_rac_ons}.

---

##### `EnableScanListener`<sup>Optional</sup> <a name="EnableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableScanListener"></a>

```go
EnableScanListener interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_scan_listener DatabaseServiceInstance#enable_scan_listener}.

---

##### `EnableSsh`<sup>Optional</sup> <a name="EnableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules.property.enableSsh"></a>

```go
EnableSsh interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#enable_ssh DatabaseServiceInstance#enable_ssh}.

---

### DatabaseServiceInstanceHybridDisasterRecovery <a name="DatabaseServiceInstanceHybridDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceHybridDisasterRecovery {
	CloudStorageContainer: *string,
	CloudStoragePassword: *string,
	CloudStorageUsername: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageContainer"></a>

```go
CloudStorageContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStoragePassword"></a>

```go
CloudStoragePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery.property.cloudStorageUsername"></a>

```go
CloudStorageUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

### DatabaseServiceInstanceInstantiateFromBackup <a name="DatabaseServiceInstanceInstantiateFromBackup" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceInstantiateFromBackup {
	CloudStorageContainer: *string,
	DatabaseId: *string,
	CloudStoragePassword: *string,
	CloudStorageUsername: *string,
	DecryptionKey: *string,
	OnPremise: interface{},
	ServiceId: *string,
	WalletFileContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey">DecryptionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise">OnPremise</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId">ServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent">WalletFileContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageContainer"></a>

```go
CloudStorageContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_container DatabaseServiceInstance#cloud_storage_container}.

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#database_id DatabaseServiceInstance#database_id}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStoragePassword"></a>

```go
CloudStoragePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_password DatabaseServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.cloudStorageUsername"></a>

```go
CloudStorageUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#cloud_storage_username DatabaseServiceInstance#cloud_storage_username}.

---

##### `DecryptionKey`<sup>Optional</sup> <a name="DecryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.decryptionKey"></a>

```go
DecryptionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#decryption_key DatabaseServiceInstance#decryption_key}.

---

##### `OnPremise`<sup>Optional</sup> <a name="OnPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.onPremise"></a>

```go
OnPremise interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#on_premise DatabaseServiceInstance#on_premise}.

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#service_id DatabaseServiceInstance#service_id}.

---

##### `WalletFileContent`<sup>Optional</sup> <a name="WalletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup.property.walletFileContent"></a>

```go
WalletFileContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#wallet_file_content DatabaseServiceInstance#wallet_file_content}.

---

### DatabaseServiceInstanceStandby <a name="DatabaseServiceInstanceStandby" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceStandby {
	AvailabilityDomain: *string,
	Subnet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet">Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}. |

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#availability_domain DatabaseServiceInstance#availability_domain}.

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#subnet DatabaseServiceInstance#subnet}.

---

### DatabaseServiceInstanceTimeouts <a name="DatabaseServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

&databaseserviceinstance.DatabaseServiceInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#create DatabaseServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#delete DatabaseServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_service_instance#update DatabaseServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseServiceInstanceBackupsOutputReference <a name="DatabaseServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceBackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceBackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword">ResetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername">ResetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing">ResetCreateIfMissing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```go
func ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```go
func ResetCloudStorageUsername()
```

##### `ResetCreateIfMissing` <a name="ResetCreateIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```go
func ResetCreateIfMissing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput">CreateIfMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing">CreateIfMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```go
func CloudStorageContainerInput() *string
```

- *Type:* *string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```go
func CloudStoragePasswordInput() *string
```

- *Type:* *string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```go
func CloudStorageUsernameInput() *string
```

- *Type:* *string

---

##### `CreateIfMissingInput`<sup>Optional</sup> <a name="CreateIfMissingInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```go
func CreateIfMissingInput() interface{}
```

- *Type:* interface{}

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```go
func CloudStoragePassword() *string
```

- *Type:* *string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```go
func CloudStorageUsername() *string
```

- *Type:* *string

---

##### `CreateIfMissing`<sup>Required</sup> <a name="CreateIfMissing" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```go
func CreateIfMissing() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceBackups">DatabaseServiceInstanceBackups</a>

---


### DatabaseServiceInstanceDatabaseConfigurationOutputReference <a name="DatabaseServiceInstanceDatabaseConfigurationOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceDatabaseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceDatabaseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination">ResetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize">ResetBackupStorageVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize">ResetDataStorageVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo">ResetDbDemo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery">ResetDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase">ResetFailoverDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate">ResetGoldenGate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac">ResetIsRac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet">ResetNationalCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid">ResetSid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName">ResetSourceServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupDestination` <a name="ResetBackupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupDestination"></a>

```go
func ResetBackupDestination()
```

##### `ResetBackupStorageVolumeSize` <a name="ResetBackupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetBackupStorageVolumeSize"></a>

```go
func ResetBackupStorageVolumeSize()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetCharacterSet"></a>

```go
func ResetCharacterSet()
```

##### `ResetDataStorageVolumeSize` <a name="ResetDataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDataStorageVolumeSize"></a>

```go
func ResetDataStorageVolumeSize()
```

##### `ResetDbDemo` <a name="ResetDbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDbDemo"></a>

```go
func ResetDbDemo()
```

##### `ResetDisasterRecovery` <a name="ResetDisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetDisasterRecovery"></a>

```go
func ResetDisasterRecovery()
```

##### `ResetFailoverDatabase` <a name="ResetFailoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetFailoverDatabase"></a>

```go
func ResetFailoverDatabase()
```

##### `ResetGoldenGate` <a name="ResetGoldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetGoldenGate"></a>

```go
func ResetGoldenGate()
```

##### `ResetIsRac` <a name="ResetIsRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetIsRac"></a>

```go
func ResetIsRac()
```

##### `ResetNationalCharacterSet` <a name="ResetNationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetNationalCharacterSet"></a>

```go
func ResetNationalCharacterSet()
```

##### `ResetPdbName` <a name="ResetPdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetPdbName"></a>

```go
func ResetPdbName()
```

##### `ResetSid` <a name="ResetSid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSid"></a>

```go
func ResetSid()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSourceServiceName` <a name="ResetSourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetSourceServiceName"></a>

```go
func ResetSourceServiceName()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput">BackupDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput">BackupStorageVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput">DataStorageVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput">DbDemoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput">DisasterRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput">FailoverDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput">GoldenGateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput">IsRacInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput">NationalCharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput">SidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput">SourceServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput">UsableStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize">BackupStorageVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize">DataStorageVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo">DbDemo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery">DisasterRecovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase">FailoverDatabase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate">GoldenGate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac">IsRac</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage">UsableStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `BackupDestinationInput`<sup>Optional</sup> <a name="BackupDestinationInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestinationInput"></a>

```go
func BackupDestinationInput() *string
```

- *Type:* *string

---

##### `BackupStorageVolumeSizeInput`<sup>Optional</sup> <a name="BackupStorageVolumeSizeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSizeInput"></a>

```go
func BackupStorageVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `DataStorageVolumeSizeInput`<sup>Optional</sup> <a name="DataStorageVolumeSizeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSizeInput"></a>

```go
func DataStorageVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `DbDemoInput`<sup>Optional</sup> <a name="DbDemoInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemoInput"></a>

```go
func DbDemoInput() *string
```

- *Type:* *string

---

##### `DisasterRecoveryInput`<sup>Optional</sup> <a name="DisasterRecoveryInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecoveryInput"></a>

```go
func DisasterRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverDatabaseInput`<sup>Optional</sup> <a name="FailoverDatabaseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabaseInput"></a>

```go
func FailoverDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `GoldenGateInput`<sup>Optional</sup> <a name="GoldenGateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGateInput"></a>

```go
func GoldenGateInput() interface{}
```

- *Type:* interface{}

---

##### `IsRacInput`<sup>Optional</sup> <a name="IsRacInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRacInput"></a>

```go
func IsRacInput() interface{}
```

- *Type:* interface{}

---

##### `NationalCharacterSetInput`<sup>Optional</sup> <a name="NationalCharacterSetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSetInput"></a>

```go
func NationalCharacterSetInput() *string
```

- *Type:* *string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sidInput"></a>

```go
func SidInput() *string
```

- *Type:* *string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SourceServiceNameInput`<sup>Optional</sup> <a name="SourceServiceNameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceNameInput"></a>

```go
func SourceServiceNameInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsableStorageInput`<sup>Optional</sup> <a name="UsableStorageInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorageInput"></a>

```go
func UsableStorageInput() *f64
```

- *Type:* *f64

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupDestination"></a>

```go
func BackupDestination() *string
```

- *Type:* *string

---

##### `BackupStorageVolumeSize`<sup>Required</sup> <a name="BackupStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.backupStorageVolumeSize"></a>

```go
func BackupStorageVolumeSize() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `DataStorageVolumeSize`<sup>Required</sup> <a name="DataStorageVolumeSize" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dataStorageVolumeSize"></a>

```go
func DataStorageVolumeSize() *f64
```

- *Type:* *f64

---

##### `DbDemo`<sup>Required</sup> <a name="DbDemo" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.dbDemo"></a>

```go
func DbDemo() *string
```

- *Type:* *string

---

##### `DisasterRecovery`<sup>Required</sup> <a name="DisasterRecovery" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.disasterRecovery"></a>

```go
func DisasterRecovery() interface{}
```

- *Type:* interface{}

---

##### `FailoverDatabase`<sup>Required</sup> <a name="FailoverDatabase" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.failoverDatabase"></a>

```go
func FailoverDatabase() interface{}
```

- *Type:* interface{}

---

##### `GoldenGate`<sup>Required</sup> <a name="GoldenGate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.goldenGate"></a>

```go
func GoldenGate() interface{}
```

- *Type:* interface{}

---

##### `IsRac`<sup>Required</sup> <a name="IsRac" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.isRac"></a>

```go
func IsRac() interface{}
```

- *Type:* interface{}

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SourceServiceName`<sup>Required</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.sourceServiceName"></a>

```go
func SourceServiceName() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsableStorage`<sup>Required</sup> <a name="UsableStorage" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.usableStorage"></a>

```go
func UsableStorage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceDatabaseConfiguration
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDatabaseConfiguration">DatabaseServiceInstanceDatabaseConfiguration</a>

---


### DatabaseServiceInstanceDefaultAccessRulesOutputReference <a name="DatabaseServiceInstanceDefaultAccessRulesOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceDefaultAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceDefaultAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole">ResetEnableDbConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress">ResetEnableDbExpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener">ResetEnableDbListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole">ResetEnableEmConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp">ResetEnableHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl">ResetEnableHttpSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener">ResetEnableRacDbListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns">ResetEnableRacOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener">ResetEnableScanListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh">ResetEnableSsh</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDbConsole` <a name="ResetEnableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbConsole"></a>

```go
func ResetEnableDbConsole()
```

##### `ResetEnableDbExpress` <a name="ResetEnableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbExpress"></a>

```go
func ResetEnableDbExpress()
```

##### `ResetEnableDbListener` <a name="ResetEnableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableDbListener"></a>

```go
func ResetEnableDbListener()
```

##### `ResetEnableEmConsole` <a name="ResetEnableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableEmConsole"></a>

```go
func ResetEnableEmConsole()
```

##### `ResetEnableHttp` <a name="ResetEnableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttp"></a>

```go
func ResetEnableHttp()
```

##### `ResetEnableHttpSsl` <a name="ResetEnableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableHttpSsl"></a>

```go
func ResetEnableHttpSsl()
```

##### `ResetEnableRacDbListener` <a name="ResetEnableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacDbListener"></a>

```go
func ResetEnableRacDbListener()
```

##### `ResetEnableRacOns` <a name="ResetEnableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableRacOns"></a>

```go
func ResetEnableRacOns()
```

##### `ResetEnableScanListener` <a name="ResetEnableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableScanListener"></a>

```go
func ResetEnableScanListener()
```

##### `ResetEnableSsh` <a name="ResetEnableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.resetEnableSsh"></a>

```go
func ResetEnableSsh()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput">EnableDbConsoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput">EnableDbExpressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput">EnableDbListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput">EnableEmConsoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput">EnableHttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput">EnableHttpSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput">EnableRacDbListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput">EnableRacOnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput">EnableScanListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput">EnableSshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole">EnableDbConsole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress">EnableDbExpress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener">EnableDbListener</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole">EnableEmConsole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp">EnableHttp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl">EnableHttpSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener">EnableRacDbListener</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns">EnableRacOns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener">EnableScanListener</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh">EnableSsh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableDbConsoleInput`<sup>Optional</sup> <a name="EnableDbConsoleInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsoleInput"></a>

```go
func EnableDbConsoleInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDbExpressInput`<sup>Optional</sup> <a name="EnableDbExpressInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpressInput"></a>

```go
func EnableDbExpressInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDbListenerInput`<sup>Optional</sup> <a name="EnableDbListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListenerInput"></a>

```go
func EnableDbListenerInput() interface{}
```

- *Type:* interface{}

---

##### `EnableEmConsoleInput`<sup>Optional</sup> <a name="EnableEmConsoleInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsoleInput"></a>

```go
func EnableEmConsoleInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpInput`<sup>Optional</sup> <a name="EnableHttpInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpInput"></a>

```go
func EnableHttpInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpSslInput`<sup>Optional</sup> <a name="EnableHttpSslInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSslInput"></a>

```go
func EnableHttpSslInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRacDbListenerInput`<sup>Optional</sup> <a name="EnableRacDbListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListenerInput"></a>

```go
func EnableRacDbListenerInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRacOnsInput`<sup>Optional</sup> <a name="EnableRacOnsInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOnsInput"></a>

```go
func EnableRacOnsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableScanListenerInput`<sup>Optional</sup> <a name="EnableScanListenerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListenerInput"></a>

```go
func EnableScanListenerInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSshInput`<sup>Optional</sup> <a name="EnableSshInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSshInput"></a>

```go
func EnableSshInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDbConsole`<sup>Required</sup> <a name="EnableDbConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbConsole"></a>

```go
func EnableDbConsole() interface{}
```

- *Type:* interface{}

---

##### `EnableDbExpress`<sup>Required</sup> <a name="EnableDbExpress" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbExpress"></a>

```go
func EnableDbExpress() interface{}
```

- *Type:* interface{}

---

##### `EnableDbListener`<sup>Required</sup> <a name="EnableDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableDbListener"></a>

```go
func EnableDbListener() interface{}
```

- *Type:* interface{}

---

##### `EnableEmConsole`<sup>Required</sup> <a name="EnableEmConsole" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableEmConsole"></a>

```go
func EnableEmConsole() interface{}
```

- *Type:* interface{}

---

##### `EnableHttp`<sup>Required</sup> <a name="EnableHttp" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttp"></a>

```go
func EnableHttp() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpSsl`<sup>Required</sup> <a name="EnableHttpSsl" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableHttpSsl"></a>

```go
func EnableHttpSsl() interface{}
```

- *Type:* interface{}

---

##### `EnableRacDbListener`<sup>Required</sup> <a name="EnableRacDbListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacDbListener"></a>

```go
func EnableRacDbListener() interface{}
```

- *Type:* interface{}

---

##### `EnableRacOns`<sup>Required</sup> <a name="EnableRacOns" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableRacOns"></a>

```go
func EnableRacOns() interface{}
```

- *Type:* interface{}

---

##### `EnableScanListener`<sup>Required</sup> <a name="EnableScanListener" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableScanListener"></a>

```go
func EnableScanListener() interface{}
```

- *Type:* interface{}

---

##### `EnableSsh`<sup>Required</sup> <a name="EnableSsh" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.enableSsh"></a>

```go
func EnableSsh() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceDefaultAccessRules
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceDefaultAccessRules">DatabaseServiceInstanceDefaultAccessRules</a>

---


### DatabaseServiceInstanceHybridDisasterRecoveryOutputReference <a name="DatabaseServiceInstanceHybridDisasterRecoveryOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceHybridDisasterRecoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceHybridDisasterRecoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword">ResetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername">ResetCloudStorageUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStoragePassword"></a>

```go
func ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.resetCloudStorageUsername"></a>

```go
func ResetCloudStorageUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainerInput"></a>

```go
func CloudStorageContainerInput() *string
```

- *Type:* *string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePasswordInput"></a>

```go
func CloudStoragePasswordInput() *string
```

- *Type:* *string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsernameInput"></a>

```go
func CloudStorageUsernameInput() *string
```

- *Type:* *string

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStoragePassword"></a>

```go
func CloudStoragePassword() *string
```

- *Type:* *string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.cloudStorageUsername"></a>

```go
func CloudStorageUsername() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceHybridDisasterRecovery
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceHybridDisasterRecovery">DatabaseServiceInstanceHybridDisasterRecovery</a>

---


### DatabaseServiceInstanceInstantiateFromBackupOutputReference <a name="DatabaseServiceInstanceInstantiateFromBackupOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceInstantiateFromBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceInstantiateFromBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword">ResetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername">ResetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey">ResetDecryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise">ResetOnPremise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId">ResetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent">ResetWalletFileContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStoragePassword"></a>

```go
func ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetCloudStorageUsername"></a>

```go
func ResetCloudStorageUsername()
```

##### `ResetDecryptionKey` <a name="ResetDecryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetDecryptionKey"></a>

```go
func ResetDecryptionKey()
```

##### `ResetOnPremise` <a name="ResetOnPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetOnPremise"></a>

```go
func ResetOnPremise()
```

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetServiceId"></a>

```go
func ResetServiceId()
```

##### `ResetWalletFileContent` <a name="ResetWalletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.resetWalletFileContent"></a>

```go
func ResetWalletFileContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput">DecryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput">OnPremiseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput">WalletFileContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey">DecryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise">OnPremise</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent">WalletFileContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainerInput"></a>

```go
func CloudStorageContainerInput() *string
```

- *Type:* *string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePasswordInput"></a>

```go
func CloudStoragePasswordInput() *string
```

- *Type:* *string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsernameInput"></a>

```go
func CloudStorageUsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DecryptionKeyInput`<sup>Optional</sup> <a name="DecryptionKeyInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKeyInput"></a>

```go
func DecryptionKeyInput() *string
```

- *Type:* *string

---

##### `OnPremiseInput`<sup>Optional</sup> <a name="OnPremiseInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremiseInput"></a>

```go
func OnPremiseInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `WalletFileContentInput`<sup>Optional</sup> <a name="WalletFileContentInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContentInput"></a>

```go
func WalletFileContentInput() *string
```

- *Type:* *string

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStoragePassword"></a>

```go
func CloudStoragePassword() *string
```

- *Type:* *string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.cloudStorageUsername"></a>

```go
func CloudStorageUsername() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DecryptionKey`<sup>Required</sup> <a name="DecryptionKey" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.decryptionKey"></a>

```go
func DecryptionKey() *string
```

- *Type:* *string

---

##### `OnPremise`<sup>Required</sup> <a name="OnPremise" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.onPremise"></a>

```go
func OnPremise() interface{}
```

- *Type:* interface{}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `WalletFileContent`<sup>Required</sup> <a name="WalletFileContent" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.walletFileContent"></a>

```go
func WalletFileContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceInstantiateFromBackup
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceInstantiateFromBackup">DatabaseServiceInstanceInstantiateFromBackup</a>

---


### DatabaseServiceInstanceStandbyOutputReference <a name="DatabaseServiceInstanceStandbyOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceStandbyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceStandbyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandbyOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseServiceInstanceStandby
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceStandby">DatabaseServiceInstanceStandby</a>

---


### DatabaseServiceInstanceTimeoutsOutputReference <a name="DatabaseServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/databaseserviceinstance"

databaseserviceinstance.NewDatabaseServiceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseServiceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.databaseServiceInstance.DatabaseServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



