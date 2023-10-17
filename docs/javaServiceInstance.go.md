# `oraclepaas_java_service_instance`

Refer to the Terraform Registory for docs: [`oraclepaas_java_service_instance`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance).

# `javaServiceInstance` Submodule <a name="`javaServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.javaServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JavaServiceInstance <a name="JavaServiceInstance" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance oraclepaas_java_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstance(scope Construct, id *string, config JavaServiceInstanceConfig) JavaServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig">JavaServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig">JavaServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups">PutBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector">PutOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer">PutWeblogicServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBackupDestination">ResetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBringYourOwnLicense">ResetBringYourOwnLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetEnableAdminConsole">ResetEnableAdminConsole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetMeteringFrequency">ResetMeteringFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetNotificationEmail">ResetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOracleTrafficDirector">ResetOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetServiceVersion">ResetServiceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSourceServiceName">ResetSourceServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetUseIdentityService">ResetUseIdentityService</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutBackups` <a name="PutBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups"></a>

```go
func PutBackups(value JavaServiceInstanceBackups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer"></a>

```go
func PutLoadBalancer(value JavaServiceInstanceLoadBalancer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `PutOracleTrafficDirector` <a name="PutOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector"></a>

```go
func PutOracleTrafficDirector(value JavaServiceInstanceOracleTrafficDirector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts"></a>

```go
func PutTimeouts(value JavaServiceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

---

##### `PutWeblogicServer` <a name="PutWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer"></a>

```go
func PutWeblogicServer(value JavaServiceInstanceWeblogicServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAssignPublicIp"></a>

```go
func ResetAssignPublicIp()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetBackupDestination` <a name="ResetBackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBackupDestination"></a>

```go
func ResetBackupDestination()
```

##### `ResetBringYourOwnLicense` <a name="ResetBringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBringYourOwnLicense"></a>

```go
func ResetBringYourOwnLicense()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetEnableAdminConsole` <a name="ResetEnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetEnableAdminConsole"></a>

```go
func ResetEnableAdminConsole()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetMeteringFrequency` <a name="ResetMeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetMeteringFrequency"></a>

```go
func ResetMeteringFrequency()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetNotificationEmail"></a>

```go
func ResetNotificationEmail()
```

##### `ResetOracleTrafficDirector` <a name="ResetOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOracleTrafficDirector"></a>

```go
func ResetOracleTrafficDirector()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceVersion` <a name="ResetServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetServiceVersion"></a>

```go
func ResetServiceVersion()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSourceServiceName` <a name="ResetSourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSourceServiceName"></a>

```go
func ResetSourceServiceName()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseIdentityService` <a name="ResetUseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetUseIdentityService"></a>

```go
func ResetUseIdentityService()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JavaServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.JavaServiceInstance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.JavaServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.JavaServiceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.JavaServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a JavaServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the JavaServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing JavaServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the JavaServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector">OracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer">WeblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput">BackupDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput">BackupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput">BringYourOwnLicenseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput">EnableAdminConsoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput">MeteringFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput">OracleTrafficDirectorInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput">ServiceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput">SourceServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput">UseIdentityServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput">WeblogicServerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole">EnableAdminConsole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency">MeteringFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService">UseIdentityService</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups"></a>

```go
func Backups() JavaServiceInstanceBackupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer"></a>

```go
func LoadBalancer() JavaServiceInstanceLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a>

---

##### `OracleTrafficDirector`<sup>Required</sup> <a name="OracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector"></a>

```go
func OracleTrafficDirector() JavaServiceInstanceOracleTrafficDirectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts"></a>

```go
func Timeouts() JavaServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a>

---

##### `WeblogicServer`<sup>Required</sup> <a name="WeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer"></a>

```go
func WeblogicServer() JavaServiceInstanceWeblogicServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a>

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `BackupDestinationInput`<sup>Optional</sup> <a name="BackupDestinationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput"></a>

```go
func BackupDestinationInput() *string
```

- *Type:* *string

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput"></a>

```go
func BackupsInput() JavaServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `BringYourOwnLicenseInput`<sup>Optional</sup> <a name="BringYourOwnLicenseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput"></a>

```go
func BringYourOwnLicenseInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `EnableAdminConsoleInput`<sup>Optional</sup> <a name="EnableAdminConsoleInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput"></a>

```go
func EnableAdminConsoleInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() JavaServiceInstanceLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `MeteringFrequencyInput`<sup>Optional</sup> <a name="MeteringFrequencyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput"></a>

```go
func MeteringFrequencyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput"></a>

```go
func NotificationEmailInput() *string
```

- *Type:* *string

---

##### `OracleTrafficDirectorInput`<sup>Optional</sup> <a name="OracleTrafficDirectorInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput"></a>

```go
func OracleTrafficDirectorInput() JavaServiceInstanceOracleTrafficDirector
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceVersionInput`<sup>Optional</sup> <a name="ServiceVersionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput"></a>

```go
func ServiceVersionInput() *string
```

- *Type:* *string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SourceServiceNameInput`<sup>Optional</sup> <a name="SourceServiceNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput"></a>

```go
func SourceServiceNameInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseIdentityServiceInput`<sup>Optional</sup> <a name="UseIdentityServiceInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput"></a>

```go
func UseIdentityServiceInput() interface{}
```

- *Type:* interface{}

---

##### `WeblogicServerInput`<sup>Optional</sup> <a name="WeblogicServerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput"></a>

```go
func WeblogicServerInput() JavaServiceInstanceWeblogicServer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp"></a>

```go
func AssignPublicIp() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination"></a>

```go
func BackupDestination() *string
```

- *Type:* *string

---

##### `BringYourOwnLicense`<sup>Required</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense"></a>

```go
func BringYourOwnLicense() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `EnableAdminConsole`<sup>Required</sup> <a name="EnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole"></a>

```go
func EnableAdminConsole() interface{}
```

- *Type:* interface{}

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `MeteringFrequency`<sup>Required</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency"></a>

```go
func MeteringFrequency() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail"></a>

```go
func NotificationEmail() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion"></a>

```go
func ServiceVersion() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SourceServiceName`<sup>Required</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName"></a>

```go
func SourceServiceName() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `UseIdentityService`<sup>Required</sup> <a name="UseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService"></a>

```go
func UseIdentityService() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### JavaServiceInstanceBackups <a name="JavaServiceInstanceBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceBackups {
	CloudStorageContainer: *string,
	AutoGenerate: interface{},
	CloudStoragePassword: *string,
	CloudStorageUsername: *string,
	UseOauthForStorage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate">AutoGenerate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#auto_generate JavaServiceInstance#auto_generate}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage">UseOauthForStorage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer"></a>

```go
CloudStorageContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}.

---

##### `AutoGenerate`<sup>Optional</sup> <a name="AutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate"></a>

```go
AutoGenerate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#auto_generate JavaServiceInstance#auto_generate}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword"></a>

```go
CloudStoragePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername"></a>

```go
CloudStorageUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}.

---

##### `UseOauthForStorage`<sup>Optional</sup> <a name="UseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage"></a>

```go
UseOauthForStorage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}.

---

### JavaServiceInstanceConfig <a name="JavaServiceInstanceConfig" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backups: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceBackups,
	Edition: *string,
	Name: *string,
	SshPublicKey: *string,
	WeblogicServer: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServer,
	AssignPublicIp: interface{},
	AvailabilityDomain: *string,
	BackupDestination: *string,
	BringYourOwnLicense: interface{},
	Description: *string,
	DesiredState: *string,
	EnableAdminConsole: interface{},
	ForceDelete: interface{},
	Id: *string,
	IpNetwork: *string,
	Level: *string,
	LoadBalancer: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceLoadBalancer,
	MeteringFrequency: *string,
	NotificationEmail: *string,
	OracleTrafficDirector: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector,
	Region: *string,
	ServiceVersion: *string,
	SnapshotName: *string,
	SourceServiceName: *string,
	Subnet: *string,
	Timeouts: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceTimeouts,
	UseIdentityService: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#edition JavaServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer">WeblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | weblogic_server block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#availability_domain JavaServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_destination JavaServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#description JavaServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#desired_state JavaServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole">EnableAdminConsole</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#force_delete JavaServiceInstance#force_delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#id JavaServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_network JavaServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#level JavaServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency">MeteringFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail">NotificationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#notification_email JavaServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector">OracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | oracle_traffic_director block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#region JavaServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#service_version JavaServiceInstance#service_version}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName">SourceServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#source_service_name JavaServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet">Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnet JavaServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService">UseIdentityService</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups"></a>

```go
Backups JavaServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backups JavaServiceInstance#backups}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#edition JavaServiceInstance#edition}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}.

---

##### `WeblogicServer`<sup>Required</sup> <a name="WeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer"></a>

```go
WeblogicServer JavaServiceInstanceWeblogicServer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

weblogic_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#weblogic_server JavaServiceInstance#weblogic_server}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp"></a>

```go
AssignPublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#availability_domain JavaServiceInstance#availability_domain}.

---

##### `BackupDestination`<sup>Optional</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination"></a>

```go
BackupDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_destination JavaServiceInstance#backup_destination}.

---

##### `BringYourOwnLicense`<sup>Optional</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense"></a>

```go
BringYourOwnLicense interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#description JavaServiceInstance#description}.

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#desired_state JavaServiceInstance#desired_state}.

---

##### `EnableAdminConsole`<sup>Optional</sup> <a name="EnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole"></a>

```go
EnableAdminConsole interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#force_delete JavaServiceInstance#force_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#id JavaServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_network JavaServiceInstance#ip_network}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#level JavaServiceInstance#level}.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer"></a>

```go
LoadBalancer JavaServiceInstanceLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancer JavaServiceInstance#load_balancer}

---

##### `MeteringFrequency`<sup>Optional</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency"></a>

```go
MeteringFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail"></a>

```go
NotificationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#notification_email JavaServiceInstance#notification_email}.

---

##### `OracleTrafficDirector`<sup>Optional</sup> <a name="OracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector"></a>

```go
OracleTrafficDirector JavaServiceInstanceOracleTrafficDirector
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

oracle_traffic_director block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#oracle_traffic_director JavaServiceInstance#oracle_traffic_director}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#region JavaServiceInstance#region}.

---

##### `ServiceVersion`<sup>Optional</sup> <a name="ServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion"></a>

```go
ServiceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#service_version JavaServiceInstance#service_version}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}.

---

##### `SourceServiceName`<sup>Optional</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName"></a>

```go
SourceServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#source_service_name JavaServiceInstance#source_service_name}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnet JavaServiceInstance#subnet}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts"></a>

```go
Timeouts JavaServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#timeouts JavaServiceInstance#timeouts}

---

##### `UseIdentityService`<sup>Optional</sup> <a name="UseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService"></a>

```go
UseIdentityService interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}.

---

### JavaServiceInstanceLoadBalancer <a name="JavaServiceInstanceLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceLoadBalancer {
	LoadBalancingPolicy: *string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnets JavaServiceInstance#subnets}. |

---

##### `LoadBalancingPolicy`<sup>Optional</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy"></a>

```go
LoadBalancingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#subnets JavaServiceInstance#subnets}.

---

### JavaServiceInstanceOracleTrafficDirector <a name="JavaServiceInstanceOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceOracleTrafficDirector {
	Admin: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin,
	Shape: *string,
	HighAvailability: interface{},
	IpReservations: *[]*string,
	Listener: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener,
	LoadBalancingPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability">HighAvailability</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#high_availability JavaServiceInstance#high_availability}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | listener block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin"></a>

```go
Admin JavaServiceInstanceOracleTrafficDirectorAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#admin JavaServiceInstance#admin}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `HighAvailability`<sup>Optional</sup> <a name="HighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability"></a>

```go
HighAvailability interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#high_availability JavaServiceInstance#high_availability}.

---

##### `IpReservations`<sup>Optional</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations"></a>

```go
IpReservations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `Listener`<sup>Optional</sup> <a name="Listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener"></a>

```go
Listener JavaServiceInstanceOracleTrafficDirectorListener
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#listener JavaServiceInstance#listener}

---

##### `LoadBalancingPolicy`<sup>Optional</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy"></a>

```go
LoadBalancingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

### JavaServiceInstanceOracleTrafficDirectorAdmin <a name="JavaServiceInstanceOracleTrafficDirectorAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceOracleTrafficDirectorAdmin {
	Password: *string,
	Username: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}.

---

### JavaServiceInstanceOracleTrafficDirectorListener <a name="JavaServiceInstanceOracleTrafficDirectorListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceOracleTrafficDirectorListener {
	Port: *f64,
	PrivilegedPort: *f64,
	PrivilegedSecuredPort: *f64,
	SecuredPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort">PrivilegedPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_port JavaServiceInstance#privileged_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort">PrivilegedSecuredPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort">SecuredPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}.

---

##### `PrivilegedPort`<sup>Optional</sup> <a name="PrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort"></a>

```go
PrivilegedPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_port JavaServiceInstance#privileged_port}.

---

##### `PrivilegedSecuredPort`<sup>Optional</sup> <a name="PrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort"></a>

```go
PrivilegedSecuredPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}.

---

##### `SecuredPort`<sup>Optional</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort"></a>

```go
SecuredPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceTimeouts <a name="JavaServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#create JavaServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#delete JavaServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#update JavaServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#create JavaServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#delete JavaServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#update JavaServiceInstance#update}.

---

### JavaServiceInstanceWeblogicServer <a name="JavaServiceInstanceWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServer {
	Admin: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin,
	Database: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase,
	Shape: *string,
	ApplicationDatabase: interface{},
	BackupVolumeSize: *string,
	Cluster: interface{},
	ClusterName: *string,
	ConnectString: *string,
	Domain: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain,
	IpReservations: *[]*string,
	ManagedServers: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers,
	MiddlewareVolumeSize: *string,
	NodeManager: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager,
	Ports: github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts,
	UpperStackProductName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database">Database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase">ApplicationDatabase</a></code> | <code>interface{}</code> | application_database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize">BackupVolumeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster">Cluster</a></code> | <code>interface{}</code> | cluster block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cluster_name JavaServiceInstance#cluster_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString">ConnectString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#connect_string JavaServiceInstance#connect_string}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain">Domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | domain block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers">ManagedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | managed_servers block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize">MiddlewareVolumeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager">NodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | node_manager block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | ports block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName">UpperStackProductName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}. |

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin"></a>

```go
Admin JavaServiceInstanceWeblogicServerAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#admin JavaServiceInstance#admin}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database"></a>

```go
Database JavaServiceInstanceWeblogicServerDatabase
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#database JavaServiceInstance#database}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `ApplicationDatabase`<sup>Optional</sup> <a name="ApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase"></a>

```go
ApplicationDatabase interface{}
```

- *Type:* interface{}

application_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#application_database JavaServiceInstance#application_database}

---

##### `BackupVolumeSize`<sup>Optional</sup> <a name="BackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize"></a>

```go
BackupVolumeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster"></a>

```go
Cluster interface{}
```

- *Type:* interface{}

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cluster JavaServiceInstance#cluster}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#cluster_name JavaServiceInstance#cluster_name}.

---

##### `ConnectString`<sup>Optional</sup> <a name="ConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString"></a>

```go
ConnectString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#connect_string JavaServiceInstance#connect_string}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain"></a>

```go
Domain JavaServiceInstanceWeblogicServerDomain
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#domain JavaServiceInstance#domain}

---

##### `IpReservations`<sup>Optional</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations"></a>

```go
IpReservations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `ManagedServers`<sup>Optional</sup> <a name="ManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers"></a>

```go
ManagedServers JavaServiceInstanceWeblogicServerManagedServers
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

managed_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#managed_servers JavaServiceInstance#managed_servers}

---

##### `MiddlewareVolumeSize`<sup>Optional</sup> <a name="MiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize"></a>

```go
MiddlewareVolumeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}.

---

##### `NodeManager`<sup>Optional</sup> <a name="NodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager"></a>

```go
NodeManager JavaServiceInstanceWeblogicServerNodeManager
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

node_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#node_manager JavaServiceInstance#node_manager}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports"></a>

```go
Ports JavaServiceInstanceWeblogicServerPorts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#ports JavaServiceInstance#ports}

---

##### `UpperStackProductName`<sup>Optional</sup> <a name="UpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName"></a>

```go
UpperStackProductName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}.

---

### JavaServiceInstanceWeblogicServerAdmin <a name="JavaServiceInstanceWeblogicServerAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerAdmin {
	Password: *string,
	Username: *string,
	Port: *f64,
	SecuredPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort">SecuredPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}.

---

##### `SecuredPort`<sup>Optional</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort"></a>

```go
SecuredPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceWeblogicServerApplicationDatabase <a name="JavaServiceInstanceWeblogicServerApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerApplicationDatabase {
	Name: *string,
	Password: *string,
	Username: *string,
	PdbName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerCluster <a name="JavaServiceInstanceWeblogicServerCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerCluster {
	Name: *string,
	Type: *string,
	PathPrefixes: *[]*string,
	ServerCount: *f64,
	ServersPerNode: *f64,
	Shape: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#type JavaServiceInstance#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes">PathPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount">ServerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode">ServersPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#type JavaServiceInstance#type}.

---

##### `PathPrefixes`<sup>Optional</sup> <a name="PathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes"></a>

```go
PathPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}.

---

##### `ServerCount`<sup>Optional</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount"></a>

```go
ServerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}.

---

##### `ServersPerNode`<sup>Optional</sup> <a name="ServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode"></a>

```go
ServersPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#shape JavaServiceInstance#shape}.

---

### JavaServiceInstanceWeblogicServerDatabase <a name="JavaServiceInstanceWeblogicServerDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerDatabase {
	Password: *string,
	Username: *string,
	Name: *string,
	PdbName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerDomain <a name="JavaServiceInstanceWeblogicServerDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerDomain {
	Mode: *string,
	Name: *string,
	PartitionCount: *f64,
	VolumeSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#mode JavaServiceInstance#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#partition_count JavaServiceInstance#partition_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize">VolumeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#volume_size JavaServiceInstance#volume_size}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#mode JavaServiceInstance#mode}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#name JavaServiceInstance#name}.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount"></a>

```go
PartitionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#partition_count JavaServiceInstance#partition_count}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize"></a>

```go
VolumeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#volume_size JavaServiceInstance#volume_size}.

---

### JavaServiceInstanceWeblogicServerManagedServers <a name="JavaServiceInstanceWeblogicServerManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerManagedServers {
	InitialHeapSize: *f64,
	InitialPermanentGeneration: *f64,
	JvmArgs: *string,
	MaxHeapSize: *f64,
	MaxPermanentGeneration: *f64,
	OverwriteJvmArgs: interface{},
	ServerCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize">InitialHeapSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration">InitialPermanentGeneration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs">JvmArgs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#jvm_args JavaServiceInstance#jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize">MaxHeapSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration">MaxPermanentGeneration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs">OverwriteJvmArgs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount">ServerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}. |

---

##### `InitialHeapSize`<sup>Optional</sup> <a name="InitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize"></a>

```go
InitialHeapSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}.

---

##### `InitialPermanentGeneration`<sup>Optional</sup> <a name="InitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration"></a>

```go
InitialPermanentGeneration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}.

---

##### `JvmArgs`<sup>Optional</sup> <a name="JvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs"></a>

```go
JvmArgs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#jvm_args JavaServiceInstance#jvm_args}.

---

##### `MaxHeapSize`<sup>Optional</sup> <a name="MaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize"></a>

```go
MaxHeapSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}.

---

##### `MaxPermanentGeneration`<sup>Optional</sup> <a name="MaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration"></a>

```go
MaxPermanentGeneration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}.

---

##### `OverwriteJvmArgs`<sup>Optional</sup> <a name="OverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs"></a>

```go
OverwriteJvmArgs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}.

---

##### `ServerCount`<sup>Optional</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount"></a>

```go
ServerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#server_count JavaServiceInstance#server_count}.

---

### JavaServiceInstanceWeblogicServerNodeManager <a name="JavaServiceInstanceWeblogicServerNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerNodeManager {
	Password: *string,
	Port: *f64,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#password JavaServiceInstance#password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#port JavaServiceInstance#port}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#username JavaServiceInstance#username}.

---

### JavaServiceInstanceWeblogicServerPorts <a name="JavaServiceInstanceWeblogicServerPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

&javaserviceinstance.JavaServiceInstanceWeblogicServerPorts {
	ContentPort: *f64,
	DeploymentChannelPort: *f64,
	PrivilegedContentPort: *f64,
	PrivilegedSecuredContentPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort">ContentPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#content_port JavaServiceInstance#content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort">DeploymentChannelPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort">PrivilegedContentPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort">PrivilegedSecuredContentPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}. |

---

##### `ContentPort`<sup>Optional</sup> <a name="ContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort"></a>

```go
ContentPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#content_port JavaServiceInstance#content_port}.

---

##### `DeploymentChannelPort`<sup>Optional</sup> <a name="DeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort"></a>

```go
DeploymentChannelPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}.

---

##### `PrivilegedContentPort`<sup>Optional</sup> <a name="PrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort"></a>

```go
PrivilegedContentPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}.

---

##### `PrivilegedSecuredContentPort`<sup>Optional</sup> <a name="PrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort"></a>

```go
PrivilegedSecuredContentPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### JavaServiceInstanceBackupsOutputReference <a name="JavaServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceBackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceBackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetAutoGenerate">ResetAutoGenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStoragePassword">ResetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStorageUsername">ResetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetUseOauthForStorage">ResetUseOauthForStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoGenerate` <a name="ResetAutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetAutoGenerate"></a>

```go
func ResetAutoGenerate()
```

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```go
func ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```go
func ResetCloudStorageUsername()
```

##### `ResetUseOauthForStorage` <a name="ResetUseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetUseOauthForStorage"></a>

```go
func ResetUseOauthForStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput">AutoGenerateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput">UseOauthForStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate">AutoGenerate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage">UseOauthForStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoGenerateInput`<sup>Optional</sup> <a name="AutoGenerateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput"></a>

```go
func AutoGenerateInput() interface{}
```

- *Type:* interface{}

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```go
func CloudStorageContainerInput() *string
```

- *Type:* *string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```go
func CloudStoragePasswordInput() *string
```

- *Type:* *string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```go
func CloudStorageUsernameInput() *string
```

- *Type:* *string

---

##### `UseOauthForStorageInput`<sup>Optional</sup> <a name="UseOauthForStorageInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput"></a>

```go
func UseOauthForStorageInput() interface{}
```

- *Type:* interface{}

---

##### `AutoGenerate`<sup>Required</sup> <a name="AutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate"></a>

```go
func AutoGenerate() interface{}
```

- *Type:* interface{}

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```go
func CloudStoragePassword() *string
```

- *Type:* *string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```go
func CloudStorageUsername() *string
```

- *Type:* *string

---

##### `UseOauthForStorage`<sup>Required</sup> <a name="UseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage"></a>

```go
func UseOauthForStorage() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceBackups
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---


### JavaServiceInstanceLoadBalancerOutputReference <a name="JavaServiceInstanceLoadBalancerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetLoadBalancingPolicy">ResetLoadBalancingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancingPolicy` <a name="ResetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetLoadBalancingPolicy"></a>

```go
func ResetLoadBalancingPolicy()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl">AdminUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput">LoadBalancingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUrl`<sup>Required</sup> <a name="AdminUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl"></a>

```go
func AdminUrl() *string
```

- *Type:* *string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl"></a>

```go
func ConsoleUrl() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `LoadBalancingPolicyInput`<sup>Optional</sup> <a name="LoadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput"></a>

```go
func LoadBalancingPolicyInput() *string
```

- *Type:* *string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancingPolicy`<sup>Required</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy"></a>

```go
func LoadBalancingPolicy() *string
```

- *Type:* *string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---


### JavaServiceInstanceOracleTrafficDirectorAdminOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceOracleTrafficDirectorAdminOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceOracleTrafficDirectorAdminOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceOracleTrafficDirectorAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---


### JavaServiceInstanceOracleTrafficDirectorListenerOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorListenerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceOracleTrafficDirectorListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceOracleTrafficDirectorListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedPort">ResetPrivilegedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedSecuredPort">ResetPrivilegedSecuredPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetSecuredPort">ResetSecuredPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrivilegedPort` <a name="ResetPrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedPort"></a>

```go
func ResetPrivilegedPort()
```

##### `ResetPrivilegedSecuredPort` <a name="ResetPrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedSecuredPort"></a>

```go
func ResetPrivilegedSecuredPort()
```

##### `ResetSecuredPort` <a name="ResetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetSecuredPort"></a>

```go
func ResetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput">PrivilegedPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput">PrivilegedSecuredPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput">SecuredPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort">PrivilegedPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort">PrivilegedSecuredPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort">SecuredPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivilegedPortInput`<sup>Optional</sup> <a name="PrivilegedPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput"></a>

```go
func PrivilegedPortInput() *f64
```

- *Type:* *f64

---

##### `PrivilegedSecuredPortInput`<sup>Optional</sup> <a name="PrivilegedSecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput"></a>

```go
func PrivilegedSecuredPortInput() *f64
```

- *Type:* *f64

---

##### `SecuredPortInput`<sup>Optional</sup> <a name="SecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput"></a>

```go
func SecuredPortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivilegedPort`<sup>Required</sup> <a name="PrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort"></a>

```go
func PrivilegedPort() *f64
```

- *Type:* *f64

---

##### `PrivilegedSecuredPort`<sup>Required</sup> <a name="PrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort"></a>

```go
func PrivilegedSecuredPort() *f64
```

- *Type:* *f64

---

##### `SecuredPort`<sup>Required</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort"></a>

```go
func SecuredPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceOracleTrafficDirectorListener
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---


### JavaServiceInstanceOracleTrafficDirectorOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceOracleTrafficDirectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceOracleTrafficDirectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin">PutAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener">PutListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetHighAvailability">ResetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetIpReservations">ResetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetListener">ResetListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetLoadBalancingPolicy">ResetLoadBalancingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdmin` <a name="PutAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin"></a>

```go
func PutAdmin(value JavaServiceInstanceOracleTrafficDirectorAdmin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `PutListener` <a name="PutListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener"></a>

```go
func PutListener(value JavaServiceInstanceOracleTrafficDirectorListener)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `ResetHighAvailability` <a name="ResetHighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetHighAvailability"></a>

```go
func ResetHighAvailability()
```

##### `ResetIpReservations` <a name="ResetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetIpReservations"></a>

```go
func ResetIpReservations()
```

##### `ResetListener` <a name="ResetListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetListener"></a>

```go
func ResetListener()
```

##### `ResetLoadBalancingPolicy` <a name="ResetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetLoadBalancingPolicy"></a>

```go
func ResetLoadBalancingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl">RootUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput">AdminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput">HighAvailabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput">IpReservationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput">ListenerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput">LoadBalancingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability">HighAvailability</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin"></a>

```go
func Admin() JavaServiceInstanceOracleTrafficDirectorAdminOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a>

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener"></a>

```go
func Listener() JavaServiceInstanceOracleTrafficDirectorListenerOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a>

---

##### `RootUrl`<sup>Required</sup> <a name="RootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl"></a>

```go
func RootUrl() *string
```

- *Type:* *string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput"></a>

```go
func AdminInput() JavaServiceInstanceOracleTrafficDirectorAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `HighAvailabilityInput`<sup>Optional</sup> <a name="HighAvailabilityInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput"></a>

```go
func HighAvailabilityInput() interface{}
```

- *Type:* interface{}

---

##### `IpReservationsInput`<sup>Optional</sup> <a name="IpReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput"></a>

```go
func IpReservationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerInput`<sup>Optional</sup> <a name="ListenerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput"></a>

```go
func ListenerInput() JavaServiceInstanceOracleTrafficDirectorListener
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `LoadBalancingPolicyInput`<sup>Optional</sup> <a name="LoadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput"></a>

```go
func LoadBalancingPolicyInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability"></a>

```go
func HighAvailability() interface{}
```

- *Type:* interface{}

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations"></a>

```go
func IpReservations() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancingPolicy`<sup>Required</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy"></a>

```go
func LoadBalancingPolicy() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceOracleTrafficDirector
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---


### JavaServiceInstanceTimeoutsOutputReference <a name="JavaServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JavaServiceInstanceWeblogicServerAdminOutputReference <a name="JavaServiceInstanceWeblogicServerAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerAdminOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerAdminOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetSecuredPort">ResetSecuredPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecuredPort` <a name="ResetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetSecuredPort"></a>

```go
func ResetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput">SecuredPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort">SecuredPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecuredPortInput`<sup>Optional</sup> <a name="SecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput"></a>

```go
func SecuredPortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecuredPort`<sup>Required</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort"></a>

```go
func SecuredPort() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseList <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerApplicationDatabaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) JavaServiceInstanceWeblogicServerApplicationDatabaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get"></a>

```go
func Get(index *f64) JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPdbName` <a name="ResetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resetPdbName"></a>

```go
func ResetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JavaServiceInstanceWeblogicServerClusterList <a name="JavaServiceInstanceWeblogicServerClusterList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) JavaServiceInstanceWeblogicServerClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get"></a>

```go
func Get(index *f64) JavaServiceInstanceWeblogicServerClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JavaServiceInstanceWeblogicServerClusterOutputReference <a name="JavaServiceInstanceWeblogicServerClusterOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) JavaServiceInstanceWeblogicServerClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetPathPrefixes">ResetPathPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServerCount">ResetServerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServersPerNode">ResetServersPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetShape">ResetShape</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathPrefixes` <a name="ResetPathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetPathPrefixes"></a>

```go
func ResetPathPrefixes()
```

##### `ResetServerCount` <a name="ResetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServerCount"></a>

```go
func ResetServerCount()
```

##### `ResetServersPerNode` <a name="ResetServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServersPerNode"></a>

```go
func ResetServersPerNode()
```

##### `ResetShape` <a name="ResetShape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetShape"></a>

```go
func ResetShape()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput">PathPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput">ServerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput">ServersPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes">PathPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount">ServerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode">ServersPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathPrefixesInput`<sup>Optional</sup> <a name="PathPrefixesInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput"></a>

```go
func PathPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerCountInput`<sup>Optional</sup> <a name="ServerCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput"></a>

```go
func ServerCountInput() *f64
```

- *Type:* *f64

---

##### `ServersPerNodeInput`<sup>Optional</sup> <a name="ServersPerNodeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput"></a>

```go
func ServersPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathPrefixes`<sup>Required</sup> <a name="PathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes"></a>

```go
func PathPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount"></a>

```go
func ServerCount() *f64
```

- *Type:* *f64

---

##### `ServersPerNode`<sup>Required</sup> <a name="ServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode"></a>

```go
func ServersPerNode() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### JavaServiceInstanceWeblogicServerDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPdbName` <a name="ResetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetPdbName"></a>

```go
func ResetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerDatabase
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---


### JavaServiceInstanceWeblogicServerDomainOutputReference <a name="JavaServiceInstanceWeblogicServerDomainOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetPartitionCount">ResetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetPartitionCount"></a>

```go
func ResetPartitionCount()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput">PartitionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput"></a>

```go
func PartitionCountInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount"></a>

```go
func PartitionCount() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerDomain
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---


### JavaServiceInstanceWeblogicServerManagedServersOutputReference <a name="JavaServiceInstanceWeblogicServerManagedServersOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerManagedServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerManagedServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialHeapSize">ResetInitialHeapSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialPermanentGeneration">ResetInitialPermanentGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetJvmArgs">ResetJvmArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxHeapSize">ResetMaxHeapSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxPermanentGeneration">ResetMaxPermanentGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetOverwriteJvmArgs">ResetOverwriteJvmArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetServerCount">ResetServerCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialHeapSize` <a name="ResetInitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialHeapSize"></a>

```go
func ResetInitialHeapSize()
```

##### `ResetInitialPermanentGeneration` <a name="ResetInitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialPermanentGeneration"></a>

```go
func ResetInitialPermanentGeneration()
```

##### `ResetJvmArgs` <a name="ResetJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetJvmArgs"></a>

```go
func ResetJvmArgs()
```

##### `ResetMaxHeapSize` <a name="ResetMaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxHeapSize"></a>

```go
func ResetMaxHeapSize()
```

##### `ResetMaxPermanentGeneration` <a name="ResetMaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxPermanentGeneration"></a>

```go
func ResetMaxPermanentGeneration()
```

##### `ResetOverwriteJvmArgs` <a name="ResetOverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetOverwriteJvmArgs"></a>

```go
func ResetOverwriteJvmArgs()
```

##### `ResetServerCount` <a name="ResetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetServerCount"></a>

```go
func ResetServerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput">InitialHeapSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput">InitialPermanentGenerationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput">JvmArgsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput">MaxHeapSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput">MaxPermanentGenerationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput">OverwriteJvmArgsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput">ServerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize">InitialHeapSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration">InitialPermanentGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs">JvmArgs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize">MaxHeapSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration">MaxPermanentGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs">OverwriteJvmArgs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount">ServerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialHeapSizeInput`<sup>Optional</sup> <a name="InitialHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput"></a>

```go
func InitialHeapSizeInput() *f64
```

- *Type:* *f64

---

##### `InitialPermanentGenerationInput`<sup>Optional</sup> <a name="InitialPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput"></a>

```go
func InitialPermanentGenerationInput() *f64
```

- *Type:* *f64

---

##### `JvmArgsInput`<sup>Optional</sup> <a name="JvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput"></a>

```go
func JvmArgsInput() *string
```

- *Type:* *string

---

##### `MaxHeapSizeInput`<sup>Optional</sup> <a name="MaxHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput"></a>

```go
func MaxHeapSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxPermanentGenerationInput`<sup>Optional</sup> <a name="MaxPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput"></a>

```go
func MaxPermanentGenerationInput() *f64
```

- *Type:* *f64

---

##### `OverwriteJvmArgsInput`<sup>Optional</sup> <a name="OverwriteJvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput"></a>

```go
func OverwriteJvmArgsInput() interface{}
```

- *Type:* interface{}

---

##### `ServerCountInput`<sup>Optional</sup> <a name="ServerCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput"></a>

```go
func ServerCountInput() *f64
```

- *Type:* *f64

---

##### `InitialHeapSize`<sup>Required</sup> <a name="InitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize"></a>

```go
func InitialHeapSize() *f64
```

- *Type:* *f64

---

##### `InitialPermanentGeneration`<sup>Required</sup> <a name="InitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration"></a>

```go
func InitialPermanentGeneration() *f64
```

- *Type:* *f64

---

##### `JvmArgs`<sup>Required</sup> <a name="JvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs"></a>

```go
func JvmArgs() *string
```

- *Type:* *string

---

##### `MaxHeapSize`<sup>Required</sup> <a name="MaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize"></a>

```go
func MaxHeapSize() *f64
```

- *Type:* *f64

---

##### `MaxPermanentGeneration`<sup>Required</sup> <a name="MaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration"></a>

```go
func MaxPermanentGeneration() *f64
```

- *Type:* *f64

---

##### `OverwriteJvmArgs`<sup>Required</sup> <a name="OverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs"></a>

```go
func OverwriteJvmArgs() interface{}
```

- *Type:* interface{}

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount"></a>

```go
func ServerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerManagedServers
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---


### JavaServiceInstanceWeblogicServerNodeManagerOutputReference <a name="JavaServiceInstanceWeblogicServerNodeManagerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerNodeManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerNodeManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerNodeManager
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---


### JavaServiceInstanceWeblogicServerOutputReference <a name="JavaServiceInstanceWeblogicServerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin">PutAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase">PutApplicationDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain">PutDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers">PutManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager">PutNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetApplicationDatabase">ResetApplicationDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetBackupVolumeSize">ResetBackupVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetConnectString">ResetConnectString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetIpReservations">ResetIpReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetManagedServers">ResetManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetMiddlewareVolumeSize">ResetMiddlewareVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetNodeManager">ResetNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetUpperStackProductName">ResetUpperStackProductName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdmin` <a name="PutAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin"></a>

```go
func PutAdmin(value JavaServiceInstanceWeblogicServerAdmin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `PutApplicationDatabase` <a name="PutApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase"></a>

```go
func PutApplicationDatabase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster"></a>

```go
func PutCluster(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase"></a>

```go
func PutDatabase(value JavaServiceInstanceWeblogicServerDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `PutDomain` <a name="PutDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain"></a>

```go
func PutDomain(value JavaServiceInstanceWeblogicServerDomain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `PutManagedServers` <a name="PutManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers"></a>

```go
func PutManagedServers(value JavaServiceInstanceWeblogicServerManagedServers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `PutNodeManager` <a name="PutNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager"></a>

```go
func PutNodeManager(value JavaServiceInstanceWeblogicServerNodeManager)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts"></a>

```go
func PutPorts(value JavaServiceInstanceWeblogicServerPorts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `ResetApplicationDatabase` <a name="ResetApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetApplicationDatabase"></a>

```go
func ResetApplicationDatabase()
```

##### `ResetBackupVolumeSize` <a name="ResetBackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetBackupVolumeSize"></a>

```go
func ResetBackupVolumeSize()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetConnectString` <a name="ResetConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetConnectString"></a>

```go
func ResetConnectString()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetIpReservations` <a name="ResetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetIpReservations"></a>

```go
func ResetIpReservations()
```

##### `ResetManagedServers` <a name="ResetManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetManagedServers"></a>

```go
func ResetManagedServers()
```

##### `ResetMiddlewareVolumeSize` <a name="ResetMiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetMiddlewareVolumeSize"></a>

```go
func ResetMiddlewareVolumeSize()
```

##### `ResetNodeManager` <a name="ResetNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetNodeManager"></a>

```go
func ResetNodeManager()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetUpperStackProductName` <a name="ResetUpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetUpperStackProductName"></a>

```go
func ResetUpperStackProductName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase">ApplicationDatabase</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database">Database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain">Domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers">ManagedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager">NodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl">RootUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput">AdminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput">ApplicationDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput">BackupVolumeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput">ClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput">ConnectStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput">DomainInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput">IpReservationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput">ManagedServersInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput">MiddlewareVolumeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput">NodeManagerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput">PortsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput">UpperStackProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize">BackupVolumeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString">ConnectString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations">IpReservations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize">MiddlewareVolumeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName">UpperStackProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin"></a>

```go
func Admin() JavaServiceInstanceWeblogicServerAdminOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a>

---

##### `ApplicationDatabase`<sup>Required</sup> <a name="ApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase"></a>

```go
func ApplicationDatabase() JavaServiceInstanceWeblogicServerApplicationDatabaseList
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster"></a>

```go
func Cluster() JavaServiceInstanceWeblogicServerClusterList
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database"></a>

```go
func Database() JavaServiceInstanceWeblogicServerDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain"></a>

```go
func Domain() JavaServiceInstanceWeblogicServerDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a>

---

##### `ManagedServers`<sup>Required</sup> <a name="ManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers"></a>

```go
func ManagedServers() JavaServiceInstanceWeblogicServerManagedServersOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a>

---

##### `NodeManager`<sup>Required</sup> <a name="NodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager"></a>

```go
func NodeManager() JavaServiceInstanceWeblogicServerNodeManagerOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports"></a>

```go
func Ports() JavaServiceInstanceWeblogicServerPortsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a>

---

##### `RootUrl`<sup>Required</sup> <a name="RootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl"></a>

```go
func RootUrl() *string
```

- *Type:* *string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput"></a>

```go
func AdminInput() JavaServiceInstanceWeblogicServerAdmin
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `ApplicationDatabaseInput`<sup>Optional</sup> <a name="ApplicationDatabaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput"></a>

```go
func ApplicationDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `BackupVolumeSizeInput`<sup>Optional</sup> <a name="BackupVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput"></a>

```go
func BackupVolumeSizeInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput"></a>

```go
func ClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConnectStringInput`<sup>Optional</sup> <a name="ConnectStringInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput"></a>

```go
func ConnectStringInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() JavaServiceInstanceWeblogicServerDatabase
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput"></a>

```go
func DomainInput() JavaServiceInstanceWeblogicServerDomain
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `IpReservationsInput`<sup>Optional</sup> <a name="IpReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput"></a>

```go
func IpReservationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedServersInput`<sup>Optional</sup> <a name="ManagedServersInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput"></a>

```go
func ManagedServersInput() JavaServiceInstanceWeblogicServerManagedServers
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `MiddlewareVolumeSizeInput`<sup>Optional</sup> <a name="MiddlewareVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput"></a>

```go
func MiddlewareVolumeSizeInput() *string
```

- *Type:* *string

---

##### `NodeManagerInput`<sup>Optional</sup> <a name="NodeManagerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput"></a>

```go
func NodeManagerInput() JavaServiceInstanceWeblogicServerNodeManager
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput"></a>

```go
func PortsInput() JavaServiceInstanceWeblogicServerPorts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `UpperStackProductNameInput`<sup>Optional</sup> <a name="UpperStackProductNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput"></a>

```go
func UpperStackProductNameInput() *string
```

- *Type:* *string

---

##### `BackupVolumeSize`<sup>Required</sup> <a name="BackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize"></a>

```go
func BackupVolumeSize() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ConnectString`<sup>Required</sup> <a name="ConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString"></a>

```go
func ConnectString() *string
```

- *Type:* *string

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations"></a>

```go
func IpReservations() *[]*string
```

- *Type:* *[]*string

---

##### `MiddlewareVolumeSize`<sup>Required</sup> <a name="MiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize"></a>

```go
func MiddlewareVolumeSize() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `UpperStackProductName`<sup>Required</sup> <a name="UpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName"></a>

```go
func UpperStackProductName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServer
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---


### JavaServiceInstanceWeblogicServerPortsOutputReference <a name="JavaServiceInstanceWeblogicServerPortsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/javaserviceinstance"

javaserviceinstance.NewJavaServiceInstanceWeblogicServerPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JavaServiceInstanceWeblogicServerPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetContentPort">ResetContentPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetDeploymentChannelPort">ResetDeploymentChannelPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedContentPort">ResetPrivilegedContentPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedSecuredContentPort">ResetPrivilegedSecuredContentPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentPort` <a name="ResetContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetContentPort"></a>

```go
func ResetContentPort()
```

##### `ResetDeploymentChannelPort` <a name="ResetDeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetDeploymentChannelPort"></a>

```go
func ResetDeploymentChannelPort()
```

##### `ResetPrivilegedContentPort` <a name="ResetPrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedContentPort"></a>

```go
func ResetPrivilegedContentPort()
```

##### `ResetPrivilegedSecuredContentPort` <a name="ResetPrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedSecuredContentPort"></a>

```go
func ResetPrivilegedSecuredContentPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput">ContentPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput">DeploymentChannelPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput">PrivilegedContentPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput">PrivilegedSecuredContentPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort">ContentPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort">DeploymentChannelPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort">PrivilegedContentPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort">PrivilegedSecuredContentPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentPortInput`<sup>Optional</sup> <a name="ContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput"></a>

```go
func ContentPortInput() *f64
```

- *Type:* *f64

---

##### `DeploymentChannelPortInput`<sup>Optional</sup> <a name="DeploymentChannelPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput"></a>

```go
func DeploymentChannelPortInput() *f64
```

- *Type:* *f64

---

##### `PrivilegedContentPortInput`<sup>Optional</sup> <a name="PrivilegedContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput"></a>

```go
func PrivilegedContentPortInput() *f64
```

- *Type:* *f64

---

##### `PrivilegedSecuredContentPortInput`<sup>Optional</sup> <a name="PrivilegedSecuredContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput"></a>

```go
func PrivilegedSecuredContentPortInput() *f64
```

- *Type:* *f64

---

##### `ContentPort`<sup>Required</sup> <a name="ContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort"></a>

```go
func ContentPort() *f64
```

- *Type:* *f64

---

##### `DeploymentChannelPort`<sup>Required</sup> <a name="DeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort"></a>

```go
func DeploymentChannelPort() *f64
```

- *Type:* *f64

---

##### `PrivilegedContentPort`<sup>Required</sup> <a name="PrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort"></a>

```go
func PrivilegedContentPort() *f64
```

- *Type:* *f64

---

##### `PrivilegedSecuredContentPort`<sup>Required</sup> <a name="PrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort"></a>

```go
func PrivilegedSecuredContentPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() JavaServiceInstanceWeblogicServerPorts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---



