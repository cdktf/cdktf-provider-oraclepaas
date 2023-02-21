# `javaServiceInstance` Submodule <a name="`javaServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.javaServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JavaServiceInstance <a name="JavaServiceInstance" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance oraclepaas_java_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstance(Construct Scope, string Id, JavaServiceInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig">JavaServiceInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBackups` <a name="PutBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups"></a>

```csharp
private void PutBackups(JavaServiceInstanceBackups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(JavaServiceInstanceLoadBalancer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `PutOracleTrafficDirector` <a name="PutOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector"></a>

```csharp
private void PutOracleTrafficDirector(JavaServiceInstanceOracleTrafficDirector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putOracleTrafficDirector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(JavaServiceInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

---

##### `PutWeblogicServer` <a name="PutWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer"></a>

```csharp
private void PutWeblogicServer(JavaServiceInstanceWeblogicServer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.putWeblogicServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetBackupDestination` <a name="ResetBackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBackupDestination"></a>

```csharp
private void ResetBackupDestination()
```

##### `ResetBringYourOwnLicense` <a name="ResetBringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetBringYourOwnLicense"></a>

```csharp
private void ResetBringYourOwnLicense()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetEnableAdminConsole` <a name="ResetEnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetEnableAdminConsole"></a>

```csharp
private void ResetEnableAdminConsole()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetIpNetwork"></a>

```csharp
private void ResetIpNetwork()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetMeteringFrequency` <a name="ResetMeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetMeteringFrequency"></a>

```csharp
private void ResetMeteringFrequency()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetNotificationEmail"></a>

```csharp
private void ResetNotificationEmail()
```

##### `ResetOracleTrafficDirector` <a name="ResetOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetOracleTrafficDirector"></a>

```csharp
private void ResetOracleTrafficDirector()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceVersion` <a name="ResetServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetServiceVersion"></a>

```csharp
private void ResetServiceVersion()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSnapshotName"></a>

```csharp
private void ResetSnapshotName()
```

##### `ResetSourceServiceName` <a name="ResetSourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSourceServiceName"></a>

```csharp
private void ResetSourceServiceName()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseIdentityService` <a name="ResetUseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.resetUseIdentityService"></a>

```csharp
private void ResetUseIdentityService()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

JavaServiceInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

JavaServiceInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

JavaServiceInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector">OracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer">WeblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput">BackupDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput">BackupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput">BringYourOwnLicenseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput">EnableAdminConsoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput">IpNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput">MeteringFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput">OracleTrafficDirectorInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput">ServiceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput">SourceServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput">UseIdentityServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput">WeblogicServerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination">BackupDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole">EnableAdminConsole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency">MeteringFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName">SourceServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService">UseIdentityService</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backups"></a>

```csharp
public JavaServiceInstanceBackupsOutputReference Backups { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference">JavaServiceInstanceBackupsOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancer"></a>

```csharp
public JavaServiceInstanceLoadBalancerOutputReference LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference">JavaServiceInstanceLoadBalancerOutputReference</a>

---

##### `OracleTrafficDirector`<sup>Required</sup> <a name="OracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirector"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorOutputReference OracleTrafficDirector { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference">JavaServiceInstanceOracleTrafficDirectorOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeouts"></a>

```csharp
public JavaServiceInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference">JavaServiceInstanceTimeoutsOutputReference</a>

---

##### `WeblogicServer`<sup>Required</sup> <a name="WeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServer"></a>

```csharp
public JavaServiceInstanceWeblogicServerOutputReference WeblogicServer { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference">JavaServiceInstanceWeblogicServerOutputReference</a>

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupDestinationInput`<sup>Optional</sup> <a name="BackupDestinationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestinationInput"></a>

```csharp
public string BackupDestinationInput { get; }
```

- *Type:* string

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupsInput"></a>

```csharp
public JavaServiceInstanceBackups BackupsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---

##### `BringYourOwnLicenseInput`<sup>Optional</sup> <a name="BringYourOwnLicenseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicenseInput"></a>

```csharp
public object BringYourOwnLicenseInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EnableAdminConsoleInput`<sup>Optional</sup> <a name="EnableAdminConsoleInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsoleInput"></a>

```csharp
public object EnableAdminConsoleInput { get; }
```

- *Type:* object

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetworkInput"></a>

```csharp
public string IpNetworkInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.loadBalancerInput"></a>

```csharp
public JavaServiceInstanceLoadBalancer LoadBalancerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---

##### `MeteringFrequencyInput`<sup>Optional</sup> <a name="MeteringFrequencyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequencyInput"></a>

```csharp
public string MeteringFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmailInput"></a>

```csharp
public string NotificationEmailInput { get; }
```

- *Type:* string

---

##### `OracleTrafficDirectorInput`<sup>Optional</sup> <a name="OracleTrafficDirectorInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.oracleTrafficDirectorInput"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirector OracleTrafficDirectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceVersionInput`<sup>Optional</sup> <a name="ServiceVersionInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersionInput"></a>

```csharp
public string ServiceVersionInput { get; }
```

- *Type:* string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `SourceServiceNameInput`<sup>Optional</sup> <a name="SourceServiceNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceNameInput"></a>

```csharp
public string SourceServiceNameInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKeyInput"></a>

```csharp
public string SshPublicKeyInput { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseIdentityServiceInput`<sup>Optional</sup> <a name="UseIdentityServiceInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityServiceInput"></a>

```csharp
public object UseIdentityServiceInput { get; }
```

- *Type:* object

---

##### `WeblogicServerInput`<sup>Optional</sup> <a name="WeblogicServerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.weblogicServerInput"></a>

```csharp
public JavaServiceInstanceWeblogicServer WeblogicServerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.backupDestination"></a>

```csharp
public string BackupDestination { get; }
```

- *Type:* string

---

##### `BringYourOwnLicense`<sup>Required</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.bringYourOwnLicense"></a>

```csharp
public object BringYourOwnLicense { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnableAdminConsole`<sup>Required</sup> <a name="EnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.enableAdminConsole"></a>

```csharp
public object EnableAdminConsole { get; }
```

- *Type:* object

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `MeteringFrequency`<sup>Required</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.meteringFrequency"></a>

```csharp
public string MeteringFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SourceServiceName`<sup>Required</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sourceServiceName"></a>

```csharp
public string SourceServiceName { get; }
```

- *Type:* string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `UseIdentityService`<sup>Required</sup> <a name="UseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.useIdentityService"></a>

```csharp
public object UseIdentityService { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JavaServiceInstanceBackups <a name="JavaServiceInstanceBackups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceBackups {
    string CloudStorageContainer,
    object AutoGenerate = null,
    string CloudStoragePassword = null,
    string CloudStorageUsername = null,
    object UseOauthForStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate">AutoGenerate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#auto_generate JavaServiceInstance#auto_generate}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage">UseOauthForStorage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}. |

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageContainer"></a>

```csharp
public string CloudStorageContainer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_container JavaServiceInstance#cloud_storage_container}.

---

##### `AutoGenerate`<sup>Optional</sup> <a name="AutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.autoGenerate"></a>

```csharp
public object AutoGenerate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#auto_generate JavaServiceInstance#auto_generate}.

---

##### `CloudStoragePassword`<sup>Optional</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStoragePassword"></a>

```csharp
public string CloudStoragePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_password JavaServiceInstance#cloud_storage_password}.

---

##### `CloudStorageUsername`<sup>Optional</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.cloudStorageUsername"></a>

```csharp
public string CloudStorageUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cloud_storage_username JavaServiceInstance#cloud_storage_username}.

---

##### `UseOauthForStorage`<sup>Optional</sup> <a name="UseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups.property.useOauthForStorage"></a>

```csharp
public object UseOauthForStorage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_oauth_for_storage JavaServiceInstance#use_oauth_for_storage}.

---

### JavaServiceInstanceConfig <a name="JavaServiceInstanceConfig" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    JavaServiceInstanceBackups Backups,
    string Edition,
    string Name,
    string SshPublicKey,
    JavaServiceInstanceWeblogicServer WeblogicServer,
    object AssignPublicIp = null,
    string AvailabilityDomain = null,
    string BackupDestination = null,
    object BringYourOwnLicense = null,
    string Description = null,
    string DesiredState = null,
    object EnableAdminConsole = null,
    object ForceDelete = null,
    string Id = null,
    string IpNetwork = null,
    string Level = null,
    JavaServiceInstanceLoadBalancer LoadBalancer = null,
    string MeteringFrequency = null,
    string NotificationEmail = null,
    JavaServiceInstanceOracleTrafficDirector OracleTrafficDirector = null,
    string Region = null,
    string ServiceVersion = null,
    string SnapshotName = null,
    string SourceServiceName = null,
    string Subnet = null,
    JavaServiceInstanceTimeouts Timeouts = null,
    object UseIdentityService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition">Edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer">WeblogicServer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | weblogic_server block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination">BackupDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole">EnableAdminConsole</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency">MeteringFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector">OracleTrafficDirector</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | oracle_traffic_director block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName">SourceServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet">Subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService">UseIdentityService</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backups"></a>

```csharp
public JavaServiceInstanceBackups Backups { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backups JavaServiceInstance#backups}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#edition JavaServiceInstance#edition}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ssh_public_key JavaServiceInstance#ssh_public_key}.

---

##### `WeblogicServer`<sup>Required</sup> <a name="WeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.weblogicServer"></a>

```csharp
public JavaServiceInstanceWeblogicServer WeblogicServer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

weblogic_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#weblogic_server JavaServiceInstance#weblogic_server}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#assign_public_ip JavaServiceInstance#assign_public_ip}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#availability_domain JavaServiceInstance#availability_domain}.

---

##### `BackupDestination`<sup>Optional</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.backupDestination"></a>

```csharp
public string BackupDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_destination JavaServiceInstance#backup_destination}.

---

##### `BringYourOwnLicense`<sup>Optional</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.bringYourOwnLicense"></a>

```csharp
public object BringYourOwnLicense { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#bring_your_own_license JavaServiceInstance#bring_your_own_license}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#description JavaServiceInstance#description}.

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#desired_state JavaServiceInstance#desired_state}.

---

##### `EnableAdminConsole`<sup>Optional</sup> <a name="EnableAdminConsole" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.enableAdminConsole"></a>

```csharp
public object EnableAdminConsole { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#enable_admin_console JavaServiceInstance#enable_admin_console}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#force_delete JavaServiceInstance#force_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#id JavaServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_network JavaServiceInstance#ip_network}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#level JavaServiceInstance#level}.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.loadBalancer"></a>

```csharp
public JavaServiceInstanceLoadBalancer LoadBalancer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancer JavaServiceInstance#load_balancer}

---

##### `MeteringFrequency`<sup>Optional</sup> <a name="MeteringFrequency" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.meteringFrequency"></a>

```csharp
public string MeteringFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#metering_frequency JavaServiceInstance#metering_frequency}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#notification_email JavaServiceInstance#notification_email}.

---

##### `OracleTrafficDirector`<sup>Optional</sup> <a name="OracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.oracleTrafficDirector"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirector OracleTrafficDirector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

oracle_traffic_director block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#oracle_traffic_director JavaServiceInstance#oracle_traffic_director}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#region JavaServiceInstance#region}.

---

##### `ServiceVersion`<sup>Optional</sup> <a name="ServiceVersion" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#service_version JavaServiceInstance#service_version}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#snapshot_name JavaServiceInstance#snapshot_name}.

---

##### `SourceServiceName`<sup>Optional</sup> <a name="SourceServiceName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.sourceServiceName"></a>

```csharp
public string SourceServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#source_service_name JavaServiceInstance#source_service_name}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnet JavaServiceInstance#subnet}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.timeouts"></a>

```csharp
public JavaServiceInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts">JavaServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#timeouts JavaServiceInstance#timeouts}

---

##### `UseIdentityService`<sup>Optional</sup> <a name="UseIdentityService" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceConfig.property.useIdentityService"></a>

```csharp
public object UseIdentityService { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#use_identity_service JavaServiceInstance#use_identity_service}.

---

### JavaServiceInstanceLoadBalancer <a name="JavaServiceInstanceLoadBalancer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceLoadBalancer {
    string LoadBalancingPolicy = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnets JavaServiceInstance#subnets}. |

---

##### `LoadBalancingPolicy`<sup>Optional</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.loadBalancingPolicy"></a>

```csharp
public string LoadBalancingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#subnets JavaServiceInstance#subnets}.

---

### JavaServiceInstanceOracleTrafficDirector <a name="JavaServiceInstanceOracleTrafficDirector" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirector {
    JavaServiceInstanceOracleTrafficDirectorAdmin Admin,
    string Shape,
    object HighAvailability = null,
    string[] IpReservations = null,
    JavaServiceInstanceOracleTrafficDirectorListener Listener = null,
    string LoadBalancingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability">HighAvailability</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#high_availability JavaServiceInstance#high_availability}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations">IpReservations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | listener block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}. |

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.admin"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorAdmin Admin { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#admin JavaServiceInstance#admin}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `HighAvailability`<sup>Optional</sup> <a name="HighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.highAvailability"></a>

```csharp
public object HighAvailability { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#high_availability JavaServiceInstance#high_availability}.

---

##### `IpReservations`<sup>Optional</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.ipReservations"></a>

```csharp
public string[] IpReservations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `Listener`<sup>Optional</sup> <a name="Listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.listener"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorListener Listener { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#listener JavaServiceInstance#listener}

---

##### `LoadBalancingPolicy`<sup>Optional</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector.property.loadBalancingPolicy"></a>

```csharp
public string LoadBalancingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#load_balancing_policy JavaServiceInstance#load_balancing_policy}.

---

### JavaServiceInstanceOracleTrafficDirectorAdmin <a name="JavaServiceInstanceOracleTrafficDirectorAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirectorAdmin {
    string Password,
    string Username,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

### JavaServiceInstanceOracleTrafficDirectorListener <a name="JavaServiceInstanceOracleTrafficDirectorListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirectorListener {
    double Port = null,
    double PrivilegedPort = null,
    double PrivilegedSecuredPort = null,
    double SecuredPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort">PrivilegedPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_port JavaServiceInstance#privileged_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort">PrivilegedSecuredPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort">SecuredPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `PrivilegedPort`<sup>Optional</sup> <a name="PrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedPort"></a>

```csharp
public double PrivilegedPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_port JavaServiceInstance#privileged_port}.

---

##### `PrivilegedSecuredPort`<sup>Optional</sup> <a name="PrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.privilegedSecuredPort"></a>

```csharp
public double PrivilegedSecuredPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_port JavaServiceInstance#privileged_secured_port}.

---

##### `SecuredPort`<sup>Optional</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener.property.securedPort"></a>

```csharp
public double SecuredPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceTimeouts <a name="JavaServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#create JavaServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#delete JavaServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#update JavaServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#create JavaServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#delete JavaServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#update JavaServiceInstance#update}.

---

### JavaServiceInstanceWeblogicServer <a name="JavaServiceInstanceWeblogicServer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServer {
    JavaServiceInstanceWeblogicServerAdmin Admin,
    JavaServiceInstanceWeblogicServerDatabase Database,
    string Shape,
    object ApplicationDatabase = null,
    string BackupVolumeSize = null,
    object Cluster = null,
    string ClusterName = null,
    string ConnectString = null,
    JavaServiceInstanceWeblogicServerDomain Domain = null,
    string[] IpReservations = null,
    JavaServiceInstanceWeblogicServerManagedServers ManagedServers = null,
    string MiddlewareVolumeSize = null,
    JavaServiceInstanceWeblogicServerNodeManager NodeManager = null,
    JavaServiceInstanceWeblogicServerPorts Ports = null,
    string UpperStackProductName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | admin block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database">Database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase">ApplicationDatabase</a></code> | <code>object</code> | application_database block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize">BackupVolumeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster">Cluster</a></code> | <code>object</code> | cluster block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster_name JavaServiceInstance#cluster_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString">ConnectString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#connect_string JavaServiceInstance#connect_string}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain">Domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | domain block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations">IpReservations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers">ManagedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | managed_servers block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize">MiddlewareVolumeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager">NodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | node_manager block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | ports block. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName">UpperStackProductName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}. |

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.admin"></a>

```csharp
public JavaServiceInstanceWeblogicServerAdmin Admin { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

admin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#admin JavaServiceInstance#admin}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.database"></a>

```csharp
public JavaServiceInstanceWeblogicServerDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#database JavaServiceInstance#database}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

##### `ApplicationDatabase`<sup>Optional</sup> <a name="ApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.applicationDatabase"></a>

```csharp
public object ApplicationDatabase { get; set; }
```

- *Type:* object

application_database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#application_database JavaServiceInstance#application_database}

---

##### `BackupVolumeSize`<sup>Optional</sup> <a name="BackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.backupVolumeSize"></a>

```csharp
public string BackupVolumeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#backup_volume_size JavaServiceInstance#backup_volume_size}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.cluster"></a>

```csharp
public object Cluster { get; set; }
```

- *Type:* object

cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster JavaServiceInstance#cluster}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#cluster_name JavaServiceInstance#cluster_name}.

---

##### `ConnectString`<sup>Optional</sup> <a name="ConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.connectString"></a>

```csharp
public string ConnectString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#connect_string JavaServiceInstance#connect_string}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.domain"></a>

```csharp
public JavaServiceInstanceWeblogicServerDomain Domain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

domain block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#domain JavaServiceInstance#domain}

---

##### `IpReservations`<sup>Optional</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ipReservations"></a>

```csharp
public string[] IpReservations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ip_reservations JavaServiceInstance#ip_reservations}.

---

##### `ManagedServers`<sup>Optional</sup> <a name="ManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.managedServers"></a>

```csharp
public JavaServiceInstanceWeblogicServerManagedServers ManagedServers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

managed_servers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#managed_servers JavaServiceInstance#managed_servers}

---

##### `MiddlewareVolumeSize`<sup>Optional</sup> <a name="MiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.middlewareVolumeSize"></a>

```csharp
public string MiddlewareVolumeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#middleware_volume_size JavaServiceInstance#middleware_volume_size}.

---

##### `NodeManager`<sup>Optional</sup> <a name="NodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.nodeManager"></a>

```csharp
public JavaServiceInstanceWeblogicServerNodeManager NodeManager { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

node_manager block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#node_manager JavaServiceInstance#node_manager}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.ports"></a>

```csharp
public JavaServiceInstanceWeblogicServerPorts Ports { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#ports JavaServiceInstance#ports}

---

##### `UpperStackProductName`<sup>Optional</sup> <a name="UpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer.property.upperStackProductName"></a>

```csharp
public string UpperStackProductName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#upper_stack_product_name JavaServiceInstance#upper_stack_product_name}.

---

### JavaServiceInstanceWeblogicServerAdmin <a name="JavaServiceInstanceWeblogicServerAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerAdmin {
    string Password,
    string Username,
    double Port = null,
    double SecuredPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort">SecuredPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `SecuredPort`<sup>Optional</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin.property.securedPort"></a>

```csharp
public double SecuredPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#secured_port JavaServiceInstance#secured_port}.

---

### JavaServiceInstanceWeblogicServerApplicationDatabase <a name="JavaServiceInstanceWeblogicServerApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerApplicationDatabase {
    string Name,
    string Password,
    string Username,
    string PdbName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerCluster <a name="JavaServiceInstanceWeblogicServerCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerCluster {
    string Name,
    string Type,
    string[] PathPrefixes = null,
    double ServerCount = null,
    double ServersPerNode = null,
    string Shape = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#type JavaServiceInstance#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes">PathPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount">ServerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode">ServersPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#type JavaServiceInstance#type}.

---

##### `PathPrefixes`<sup>Optional</sup> <a name="PathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.pathPrefixes"></a>

```csharp
public string[] PathPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#path_prefixes JavaServiceInstance#path_prefixes}.

---

##### `ServerCount`<sup>Optional</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serverCount"></a>

```csharp
public double ServerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}.

---

##### `ServersPerNode`<sup>Optional</sup> <a name="ServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.serversPerNode"></a>

```csharp
public double ServersPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#servers_per_node JavaServiceInstance#servers_per_node}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerCluster.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#shape JavaServiceInstance#shape}.

---

### JavaServiceInstanceWeblogicServerDatabase <a name="JavaServiceInstanceWeblogicServerDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerDatabase {
    string Password,
    string Username,
    string Name = null,
    string PdbName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#pdb_name JavaServiceInstance#pdb_name}.

---

### JavaServiceInstanceWeblogicServerDomain <a name="JavaServiceInstanceWeblogicServerDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerDomain {
    string Mode = null,
    string Name = null,
    double PartitionCount = null,
    string VolumeSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#mode JavaServiceInstance#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount">PartitionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#partition_count JavaServiceInstance#partition_count}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize">VolumeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#volume_size JavaServiceInstance#volume_size}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#mode JavaServiceInstance#mode}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#name JavaServiceInstance#name}.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.partitionCount"></a>

```csharp
public double PartitionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#partition_count JavaServiceInstance#partition_count}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain.property.volumeSize"></a>

```csharp
public string VolumeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#volume_size JavaServiceInstance#volume_size}.

---

### JavaServiceInstanceWeblogicServerManagedServers <a name="JavaServiceInstanceWeblogicServerManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerManagedServers {
    double InitialHeapSize = null,
    double InitialPermanentGeneration = null,
    string JvmArgs = null,
    double MaxHeapSize = null,
    double MaxPermanentGeneration = null,
    object OverwriteJvmArgs = null,
    double ServerCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize">InitialHeapSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration">InitialPermanentGeneration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs">JvmArgs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#jvm_args JavaServiceInstance#jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize">MaxHeapSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration">MaxPermanentGeneration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs">OverwriteJvmArgs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount">ServerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}. |

---

##### `InitialHeapSize`<sup>Optional</sup> <a name="InitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialHeapSize"></a>

```csharp
public double InitialHeapSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_heap_size JavaServiceInstance#initial_heap_size}.

---

##### `InitialPermanentGeneration`<sup>Optional</sup> <a name="InitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.initialPermanentGeneration"></a>

```csharp
public double InitialPermanentGeneration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#initial_permanent_generation JavaServiceInstance#initial_permanent_generation}.

---

##### `JvmArgs`<sup>Optional</sup> <a name="JvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.jvmArgs"></a>

```csharp
public string JvmArgs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#jvm_args JavaServiceInstance#jvm_args}.

---

##### `MaxHeapSize`<sup>Optional</sup> <a name="MaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxHeapSize"></a>

```csharp
public double MaxHeapSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_heap_size JavaServiceInstance#max_heap_size}.

---

##### `MaxPermanentGeneration`<sup>Optional</sup> <a name="MaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.maxPermanentGeneration"></a>

```csharp
public double MaxPermanentGeneration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#max_permanent_generation JavaServiceInstance#max_permanent_generation}.

---

##### `OverwriteJvmArgs`<sup>Optional</sup> <a name="OverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.overwriteJvmArgs"></a>

```csharp
public object OverwriteJvmArgs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#overwrite_jvm_args JavaServiceInstance#overwrite_jvm_args}.

---

##### `ServerCount`<sup>Optional</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers.property.serverCount"></a>

```csharp
public double ServerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#server_count JavaServiceInstance#server_count}.

---

### JavaServiceInstanceWeblogicServerNodeManager <a name="JavaServiceInstanceWeblogicServerNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerNodeManager {
    string Password = null,
    double Port = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#password JavaServiceInstance#password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#port JavaServiceInstance#port}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#username JavaServiceInstance#username}.

---

### JavaServiceInstanceWeblogicServerPorts <a name="JavaServiceInstanceWeblogicServerPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerPorts {
    double ContentPort = null,
    double DeploymentChannelPort = null,
    double PrivilegedContentPort = null,
    double PrivilegedSecuredContentPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort">ContentPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#content_port JavaServiceInstance#content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort">DeploymentChannelPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort">PrivilegedContentPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort">PrivilegedSecuredContentPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}. |

---

##### `ContentPort`<sup>Optional</sup> <a name="ContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.contentPort"></a>

```csharp
public double ContentPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#content_port JavaServiceInstance#content_port}.

---

##### `DeploymentChannelPort`<sup>Optional</sup> <a name="DeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.deploymentChannelPort"></a>

```csharp
public double DeploymentChannelPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#deployment_channel_port JavaServiceInstance#deployment_channel_port}.

---

##### `PrivilegedContentPort`<sup>Optional</sup> <a name="PrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedContentPort"></a>

```csharp
public double PrivilegedContentPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_content_port JavaServiceInstance#privileged_content_port}.

---

##### `PrivilegedSecuredContentPort`<sup>Optional</sup> <a name="PrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts.property.privilegedSecuredContentPort"></a>

```csharp
public double PrivilegedSecuredContentPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/java_service_instance#privileged_secured_content_port JavaServiceInstance#privileged_secured_content_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### JavaServiceInstanceBackupsOutputReference <a name="JavaServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceBackupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoGenerate` <a name="ResetAutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetAutoGenerate"></a>

```csharp
private void ResetAutoGenerate()
```

##### `ResetCloudStoragePassword` <a name="ResetCloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```csharp
private void ResetCloudStoragePassword()
```

##### `ResetCloudStorageUsername` <a name="ResetCloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```csharp
private void ResetCloudStorageUsername()
```

##### `ResetUseOauthForStorage` <a name="ResetUseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.resetUseOauthForStorage"></a>

```csharp
private void ResetUseOauthForStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput">AutoGenerateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">CloudStorageContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">CloudStoragePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">CloudStorageUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput">UseOauthForStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate">AutoGenerate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword">CloudStoragePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername">CloudStorageUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage">UseOauthForStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoGenerateInput`<sup>Optional</sup> <a name="AutoGenerateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerateInput"></a>

```csharp
public object AutoGenerateInput { get; }
```

- *Type:* object

---

##### `CloudStorageContainerInput`<sup>Optional</sup> <a name="CloudStorageContainerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```csharp
public string CloudStorageContainerInput { get; }
```

- *Type:* string

---

##### `CloudStoragePasswordInput`<sup>Optional</sup> <a name="CloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```csharp
public string CloudStoragePasswordInput { get; }
```

- *Type:* string

---

##### `CloudStorageUsernameInput`<sup>Optional</sup> <a name="CloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```csharp
public string CloudStorageUsernameInput { get; }
```

- *Type:* string

---

##### `UseOauthForStorageInput`<sup>Optional</sup> <a name="UseOauthForStorageInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorageInput"></a>

```csharp
public object UseOauthForStorageInput { get; }
```

- *Type:* object

---

##### `AutoGenerate`<sup>Required</sup> <a name="AutoGenerate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.autoGenerate"></a>

```csharp
public object AutoGenerate { get; }
```

- *Type:* object

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```csharp
public string CloudStorageContainer { get; }
```

- *Type:* string

---

##### `CloudStoragePassword`<sup>Required</sup> <a name="CloudStoragePassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```csharp
public string CloudStoragePassword { get; }
```

- *Type:* string

---

##### `CloudStorageUsername`<sup>Required</sup> <a name="CloudStorageUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```csharp
public string CloudStorageUsername { get; }
```

- *Type:* string

---

##### `UseOauthForStorage`<sup>Required</sup> <a name="UseOauthForStorage" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.useOauthForStorage"></a>

```csharp
public object UseOauthForStorage { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackupsOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceBackups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceBackups">JavaServiceInstanceBackups</a>

---


### JavaServiceInstanceLoadBalancerOutputReference <a name="JavaServiceInstanceLoadBalancerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancingPolicy` <a name="ResetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetLoadBalancingPolicy"></a>

```csharp
private void ResetLoadBalancingPolicy()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl">AdminUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput">LoadBalancingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUrl`<sup>Required</sup> <a name="AdminUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.adminUrl"></a>

```csharp
public string AdminUrl { get; }
```

- *Type:* string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `LoadBalancingPolicyInput`<sup>Optional</sup> <a name="LoadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicyInput"></a>

```csharp
public string LoadBalancingPolicyInput { get; }
```

- *Type:* string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancingPolicy`<sup>Required</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.loadBalancingPolicy"></a>

```csharp
public string LoadBalancingPolicy { get; }
```

- *Type:* string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceLoadBalancer">JavaServiceInstanceLoadBalancer</a>

---


### JavaServiceInstanceOracleTrafficDirectorAdminOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirectorAdminOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorAdmin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---


### JavaServiceInstanceOracleTrafficDirectorListenerOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorListenerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirectorListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrivilegedPort` <a name="ResetPrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedPort"></a>

```csharp
private void ResetPrivilegedPort()
```

##### `ResetPrivilegedSecuredPort` <a name="ResetPrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetPrivilegedSecuredPort"></a>

```csharp
private void ResetPrivilegedSecuredPort()
```

##### `ResetSecuredPort` <a name="ResetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.resetSecuredPort"></a>

```csharp
private void ResetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput">PrivilegedPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput">PrivilegedSecuredPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput">SecuredPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort">PrivilegedPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort">PrivilegedSecuredPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort">SecuredPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivilegedPortInput`<sup>Optional</sup> <a name="PrivilegedPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPortInput"></a>

```csharp
public double PrivilegedPortInput { get; }
```

- *Type:* double

---

##### `PrivilegedSecuredPortInput`<sup>Optional</sup> <a name="PrivilegedSecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPortInput"></a>

```csharp
public double PrivilegedSecuredPortInput { get; }
```

- *Type:* double

---

##### `SecuredPortInput`<sup>Optional</sup> <a name="SecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPortInput"></a>

```csharp
public double SecuredPortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivilegedPort`<sup>Required</sup> <a name="PrivilegedPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedPort"></a>

```csharp
public double PrivilegedPort { get; }
```

- *Type:* double

---

##### `PrivilegedSecuredPort`<sup>Required</sup> <a name="PrivilegedSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.privilegedSecuredPort"></a>

```csharp
public double PrivilegedSecuredPort { get; }
```

- *Type:* double

---

##### `SecuredPort`<sup>Required</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.securedPort"></a>

```csharp
public double SecuredPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorListener InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---


### JavaServiceInstanceOracleTrafficDirectorOutputReference <a name="JavaServiceInstanceOracleTrafficDirectorOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceOracleTrafficDirectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdmin` <a name="PutAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin"></a>

```csharp
private void PutAdmin(JavaServiceInstanceOracleTrafficDirectorAdmin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `PutListener` <a name="PutListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener"></a>

```csharp
private void PutListener(JavaServiceInstanceOracleTrafficDirectorListener Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.putListener.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `ResetHighAvailability` <a name="ResetHighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetHighAvailability"></a>

```csharp
private void ResetHighAvailability()
```

##### `ResetIpReservations` <a name="ResetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetIpReservations"></a>

```csharp
private void ResetIpReservations()
```

##### `ResetListener` <a name="ResetListener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetListener"></a>

```csharp
private void ResetListener()
```

##### `ResetLoadBalancingPolicy` <a name="ResetLoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.resetLoadBalancingPolicy"></a>

```csharp
private void ResetLoadBalancingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl">RootUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput">AdminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput">HighAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput">IpReservationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput">ListenerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput">LoadBalancingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability">HighAvailability</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations">IpReservations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy">LoadBalancingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.admin"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorAdminOutputReference Admin { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdminOutputReference">JavaServiceInstanceOracleTrafficDirectorAdminOutputReference</a>

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listener"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorListenerOutputReference Listener { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListenerOutputReference">JavaServiceInstanceOracleTrafficDirectorListenerOutputReference</a>

---

##### `RootUrl`<sup>Required</sup> <a name="RootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.rootUrl"></a>

```csharp
public string RootUrl { get; }
```

- *Type:* string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.adminInput"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorAdmin AdminInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorAdmin">JavaServiceInstanceOracleTrafficDirectorAdmin</a>

---

##### `HighAvailabilityInput`<sup>Optional</sup> <a name="HighAvailabilityInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailabilityInput"></a>

```csharp
public object HighAvailabilityInput { get; }
```

- *Type:* object

---

##### `IpReservationsInput`<sup>Optional</sup> <a name="IpReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservationsInput"></a>

```csharp
public string[] IpReservationsInput { get; }
```

- *Type:* string[]

---

##### `ListenerInput`<sup>Optional</sup> <a name="ListenerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.listenerInput"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirectorListener ListenerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorListener">JavaServiceInstanceOracleTrafficDirectorListener</a>

---

##### `LoadBalancingPolicyInput`<sup>Optional</sup> <a name="LoadBalancingPolicyInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicyInput"></a>

```csharp
public string LoadBalancingPolicyInput { get; }
```

- *Type:* string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.highAvailability"></a>

```csharp
public object HighAvailability { get; }
```

- *Type:* object

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.ipReservations"></a>

```csharp
public string[] IpReservations { get; }
```

- *Type:* string[]

---

##### `LoadBalancingPolicy`<sup>Required</sup> <a name="LoadBalancingPolicy" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.loadBalancingPolicy"></a>

```csharp
public string LoadBalancingPolicy { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirectorOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceOracleTrafficDirector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceOracleTrafficDirector">JavaServiceInstanceOracleTrafficDirector</a>

---


### JavaServiceInstanceTimeoutsOutputReference <a name="JavaServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JavaServiceInstanceWeblogicServerAdminOutputReference <a name="JavaServiceInstanceWeblogicServerAdminOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerAdminOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSecuredPort` <a name="ResetSecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.resetSecuredPort"></a>

```csharp
private void ResetSecuredPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput">SecuredPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort">SecuredPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecuredPortInput`<sup>Optional</sup> <a name="SecuredPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPortInput"></a>

```csharp
public double SecuredPortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecuredPort`<sup>Required</sup> <a name="SecuredPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.securedPort"></a>

```csharp
public double SecuredPort { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerAdmin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseList <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerApplicationDatabaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get"></a>

```csharp
private JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPdbName` <a name="ResetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.resetPdbName"></a>

```csharp
private void ResetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JavaServiceInstanceWeblogicServerClusterList <a name="JavaServiceInstanceWeblogicServerClusterList" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get"></a>

```csharp
private JavaServiceInstanceWeblogicServerClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JavaServiceInstanceWeblogicServerClusterOutputReference <a name="JavaServiceInstanceWeblogicServerClusterOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathPrefixes` <a name="ResetPathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetPathPrefixes"></a>

```csharp
private void ResetPathPrefixes()
```

##### `ResetServerCount` <a name="ResetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServerCount"></a>

```csharp
private void ResetServerCount()
```

##### `ResetServersPerNode` <a name="ResetServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetServersPerNode"></a>

```csharp
private void ResetServersPerNode()
```

##### `ResetShape` <a name="ResetShape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.resetShape"></a>

```csharp
private void ResetShape()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput">PathPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput">ServerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput">ServersPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes">PathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount">ServerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode">ServersPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathPrefixesInput`<sup>Optional</sup> <a name="PathPrefixesInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixesInput"></a>

```csharp
public string[] PathPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ServerCountInput`<sup>Optional</sup> <a name="ServerCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCountInput"></a>

```csharp
public double ServerCountInput { get; }
```

- *Type:* double

---

##### `ServersPerNodeInput`<sup>Optional</sup> <a name="ServersPerNodeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNodeInput"></a>

```csharp
public double ServersPerNodeInput { get; }
```

- *Type:* double

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathPrefixes`<sup>Required</sup> <a name="PathPrefixes" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.pathPrefixes"></a>

```csharp
public string[] PathPrefixes { get; }
```

- *Type:* string[]

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serverCount"></a>

```csharp
public double ServerCount { get; }
```

- *Type:* double

---

##### `ServersPerNode`<sup>Required</sup> <a name="ServersPerNode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.serversPerNode"></a>

```csharp
public double ServersPerNode { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JavaServiceInstanceWeblogicServerDatabaseOutputReference <a name="JavaServiceInstanceWeblogicServerDatabaseOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPdbName` <a name="ResetPdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.resetPdbName"></a>

```csharp
private void ResetPdbName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---


### JavaServiceInstanceWeblogicServerDomainOutputReference <a name="JavaServiceInstanceWeblogicServerDomainOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetPartitionCount"></a>

```csharp
private void ResetPartitionCount()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput">PartitionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount">PartitionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize">VolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCountInput"></a>

```csharp
public double PartitionCountInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSizeInput"></a>

```csharp
public string VolumeSizeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.partitionCount"></a>

```csharp
public double PartitionCount { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.volumeSize"></a>

```csharp
public string VolumeSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---


### JavaServiceInstanceWeblogicServerManagedServersOutputReference <a name="JavaServiceInstanceWeblogicServerManagedServersOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerManagedServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialHeapSize` <a name="ResetInitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialHeapSize"></a>

```csharp
private void ResetInitialHeapSize()
```

##### `ResetInitialPermanentGeneration` <a name="ResetInitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetInitialPermanentGeneration"></a>

```csharp
private void ResetInitialPermanentGeneration()
```

##### `ResetJvmArgs` <a name="ResetJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetJvmArgs"></a>

```csharp
private void ResetJvmArgs()
```

##### `ResetMaxHeapSize` <a name="ResetMaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxHeapSize"></a>

```csharp
private void ResetMaxHeapSize()
```

##### `ResetMaxPermanentGeneration` <a name="ResetMaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetMaxPermanentGeneration"></a>

```csharp
private void ResetMaxPermanentGeneration()
```

##### `ResetOverwriteJvmArgs` <a name="ResetOverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetOverwriteJvmArgs"></a>

```csharp
private void ResetOverwriteJvmArgs()
```

##### `ResetServerCount` <a name="ResetServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.resetServerCount"></a>

```csharp
private void ResetServerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput">InitialHeapSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput">InitialPermanentGenerationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput">JvmArgsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput">MaxHeapSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput">MaxPermanentGenerationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput">OverwriteJvmArgsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput">ServerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize">InitialHeapSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration">InitialPermanentGeneration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs">JvmArgs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize">MaxHeapSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration">MaxPermanentGeneration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs">OverwriteJvmArgs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount">ServerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialHeapSizeInput`<sup>Optional</sup> <a name="InitialHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSizeInput"></a>

```csharp
public double InitialHeapSizeInput { get; }
```

- *Type:* double

---

##### `InitialPermanentGenerationInput`<sup>Optional</sup> <a name="InitialPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGenerationInput"></a>

```csharp
public double InitialPermanentGenerationInput { get; }
```

- *Type:* double

---

##### `JvmArgsInput`<sup>Optional</sup> <a name="JvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgsInput"></a>

```csharp
public string JvmArgsInput { get; }
```

- *Type:* string

---

##### `MaxHeapSizeInput`<sup>Optional</sup> <a name="MaxHeapSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSizeInput"></a>

```csharp
public double MaxHeapSizeInput { get; }
```

- *Type:* double

---

##### `MaxPermanentGenerationInput`<sup>Optional</sup> <a name="MaxPermanentGenerationInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGenerationInput"></a>

```csharp
public double MaxPermanentGenerationInput { get; }
```

- *Type:* double

---

##### `OverwriteJvmArgsInput`<sup>Optional</sup> <a name="OverwriteJvmArgsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgsInput"></a>

```csharp
public object OverwriteJvmArgsInput { get; }
```

- *Type:* object

---

##### `ServerCountInput`<sup>Optional</sup> <a name="ServerCountInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCountInput"></a>

```csharp
public double ServerCountInput { get; }
```

- *Type:* double

---

##### `InitialHeapSize`<sup>Required</sup> <a name="InitialHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialHeapSize"></a>

```csharp
public double InitialHeapSize { get; }
```

- *Type:* double

---

##### `InitialPermanentGeneration`<sup>Required</sup> <a name="InitialPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.initialPermanentGeneration"></a>

```csharp
public double InitialPermanentGeneration { get; }
```

- *Type:* double

---

##### `JvmArgs`<sup>Required</sup> <a name="JvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.jvmArgs"></a>

```csharp
public string JvmArgs { get; }
```

- *Type:* string

---

##### `MaxHeapSize`<sup>Required</sup> <a name="MaxHeapSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxHeapSize"></a>

```csharp
public double MaxHeapSize { get; }
```

- *Type:* double

---

##### `MaxPermanentGeneration`<sup>Required</sup> <a name="MaxPermanentGeneration" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.maxPermanentGeneration"></a>

```csharp
public double MaxPermanentGeneration { get; }
```

- *Type:* double

---

##### `OverwriteJvmArgs`<sup>Required</sup> <a name="OverwriteJvmArgs" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.overwriteJvmArgs"></a>

```csharp
public object OverwriteJvmArgs { get; }
```

- *Type:* object

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.serverCount"></a>

```csharp
public double ServerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerManagedServers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---


### JavaServiceInstanceWeblogicServerNodeManagerOutputReference <a name="JavaServiceInstanceWeblogicServerNodeManagerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerNodeManagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerNodeManager InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---


### JavaServiceInstanceWeblogicServerOutputReference <a name="JavaServiceInstanceWeblogicServerOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdmin` <a name="PutAdmin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin"></a>

```csharp
private void PutAdmin(JavaServiceInstanceWeblogicServerAdmin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putAdmin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `PutApplicationDatabase` <a name="PutApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase"></a>

```csharp
private void PutApplicationDatabase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putApplicationDatabase.parameter.value"></a>

- *Type:* object

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster"></a>

```csharp
private void PutCluster(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putCluster.parameter.value"></a>

- *Type:* object

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(JavaServiceInstanceWeblogicServerDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `PutDomain` <a name="PutDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain"></a>

```csharp
private void PutDomain(JavaServiceInstanceWeblogicServerDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `PutManagedServers` <a name="PutManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers"></a>

```csharp
private void PutManagedServers(JavaServiceInstanceWeblogicServerManagedServers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putManagedServers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `PutNodeManager` <a name="PutNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager"></a>

```csharp
private void PutNodeManager(JavaServiceInstanceWeblogicServerNodeManager Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putNodeManager.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts"></a>

```csharp
private void PutPorts(JavaServiceInstanceWeblogicServerPorts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.putPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `ResetApplicationDatabase` <a name="ResetApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetApplicationDatabase"></a>

```csharp
private void ResetApplicationDatabase()
```

##### `ResetBackupVolumeSize` <a name="ResetBackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetBackupVolumeSize"></a>

```csharp
private void ResetBackupVolumeSize()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetConnectString` <a name="ResetConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetConnectString"></a>

```csharp
private void ResetConnectString()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetIpReservations` <a name="ResetIpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetIpReservations"></a>

```csharp
private void ResetIpReservations()
```

##### `ResetManagedServers` <a name="ResetManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetManagedServers"></a>

```csharp
private void ResetManagedServers()
```

##### `ResetMiddlewareVolumeSize` <a name="ResetMiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetMiddlewareVolumeSize"></a>

```csharp
private void ResetMiddlewareVolumeSize()
```

##### `ResetNodeManager` <a name="ResetNodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetNodeManager"></a>

```csharp
private void ResetNodeManager()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetUpperStackProductName` <a name="ResetUpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.resetUpperStackProductName"></a>

```csharp
private void ResetUpperStackProductName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase">ApplicationDatabase</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database">Database</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain">Domain</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers">ManagedServers</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager">NodeManager</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl">RootUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput">AdminInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput">ApplicationDatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput">BackupVolumeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput">ClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput">ConnectStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput">DomainInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput">IpReservationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput">ManagedServersInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput">MiddlewareVolumeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput">NodeManagerInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput">PortsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput">UpperStackProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize">BackupVolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString">ConnectString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations">IpReservations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize">MiddlewareVolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName">UpperStackProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.admin"></a>

```csharp
public JavaServiceInstanceWeblogicServerAdminOutputReference Admin { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdminOutputReference">JavaServiceInstanceWeblogicServerAdminOutputReference</a>

---

##### `ApplicationDatabase`<sup>Required</sup> <a name="ApplicationDatabase" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabase"></a>

```csharp
public JavaServiceInstanceWeblogicServerApplicationDatabaseList ApplicationDatabase { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerApplicationDatabaseList">JavaServiceInstanceWeblogicServerApplicationDatabaseList</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.cluster"></a>

```csharp
public JavaServiceInstanceWeblogicServerClusterList Cluster { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerClusterList">JavaServiceInstanceWeblogicServerClusterList</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.database"></a>

```csharp
public JavaServiceInstanceWeblogicServerDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabaseOutputReference">JavaServiceInstanceWeblogicServerDatabaseOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domain"></a>

```csharp
public JavaServiceInstanceWeblogicServerDomainOutputReference Domain { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomainOutputReference">JavaServiceInstanceWeblogicServerDomainOutputReference</a>

---

##### `ManagedServers`<sup>Required</sup> <a name="ManagedServers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServers"></a>

```csharp
public JavaServiceInstanceWeblogicServerManagedServersOutputReference ManagedServers { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServersOutputReference">JavaServiceInstanceWeblogicServerManagedServersOutputReference</a>

---

##### `NodeManager`<sup>Required</sup> <a name="NodeManager" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManager"></a>

```csharp
public JavaServiceInstanceWeblogicServerNodeManagerOutputReference NodeManager { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManagerOutputReference">JavaServiceInstanceWeblogicServerNodeManagerOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ports"></a>

```csharp
public JavaServiceInstanceWeblogicServerPortsOutputReference Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference">JavaServiceInstanceWeblogicServerPortsOutputReference</a>

---

##### `RootUrl`<sup>Required</sup> <a name="RootUrl" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.rootUrl"></a>

```csharp
public string RootUrl { get; }
```

- *Type:* string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.adminInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerAdmin AdminInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerAdmin">JavaServiceInstanceWeblogicServerAdmin</a>

---

##### `ApplicationDatabaseInput`<sup>Optional</sup> <a name="ApplicationDatabaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.applicationDatabaseInput"></a>

```csharp
public object ApplicationDatabaseInput { get; }
```

- *Type:* object

---

##### `BackupVolumeSizeInput`<sup>Optional</sup> <a name="BackupVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSizeInput"></a>

```csharp
public string BackupVolumeSizeInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterInput"></a>

```csharp
public object ClusterInput { get; }
```

- *Type:* object

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ConnectStringInput`<sup>Optional</sup> <a name="ConnectStringInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectStringInput"></a>

```csharp
public string ConnectStringInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.databaseInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerDatabase DatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDatabase">JavaServiceInstanceWeblogicServerDatabase</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.domainInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerDomain DomainInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerDomain">JavaServiceInstanceWeblogicServerDomain</a>

---

##### `IpReservationsInput`<sup>Optional</sup> <a name="IpReservationsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservationsInput"></a>

```csharp
public string[] IpReservationsInput { get; }
```

- *Type:* string[]

---

##### `ManagedServersInput`<sup>Optional</sup> <a name="ManagedServersInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.managedServersInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerManagedServers ManagedServersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerManagedServers">JavaServiceInstanceWeblogicServerManagedServers</a>

---

##### `MiddlewareVolumeSizeInput`<sup>Optional</sup> <a name="MiddlewareVolumeSizeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSizeInput"></a>

```csharp
public string MiddlewareVolumeSizeInput { get; }
```

- *Type:* string

---

##### `NodeManagerInput`<sup>Optional</sup> <a name="NodeManagerInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.nodeManagerInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerNodeManager NodeManagerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerNodeManager">JavaServiceInstanceWeblogicServerNodeManager</a>

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.portsInput"></a>

```csharp
public JavaServiceInstanceWeblogicServerPorts PortsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `UpperStackProductNameInput`<sup>Optional</sup> <a name="UpperStackProductNameInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductNameInput"></a>

```csharp
public string UpperStackProductNameInput { get; }
```

- *Type:* string

---

##### `BackupVolumeSize`<sup>Required</sup> <a name="BackupVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.backupVolumeSize"></a>

```csharp
public string BackupVolumeSize { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ConnectString`<sup>Required</sup> <a name="ConnectString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.connectString"></a>

```csharp
public string ConnectString { get; }
```

- *Type:* string

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.ipReservations"></a>

```csharp
public string[] IpReservations { get; }
```

- *Type:* string[]

---

##### `MiddlewareVolumeSize`<sup>Required</sup> <a name="MiddlewareVolumeSize" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.middlewareVolumeSize"></a>

```csharp
public string MiddlewareVolumeSize { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `UpperStackProductName`<sup>Required</sup> <a name="UpperStackProductName" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.upperStackProductName"></a>

```csharp
public string UpperStackProductName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServer">JavaServiceInstanceWeblogicServer</a>

---


### JavaServiceInstanceWeblogicServerPortsOutputReference <a name="JavaServiceInstanceWeblogicServerPortsOutputReference" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new JavaServiceInstanceWeblogicServerPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentPort` <a name="ResetContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetContentPort"></a>

```csharp
private void ResetContentPort()
```

##### `ResetDeploymentChannelPort` <a name="ResetDeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetDeploymentChannelPort"></a>

```csharp
private void ResetDeploymentChannelPort()
```

##### `ResetPrivilegedContentPort` <a name="ResetPrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedContentPort"></a>

```csharp
private void ResetPrivilegedContentPort()
```

##### `ResetPrivilegedSecuredContentPort` <a name="ResetPrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.resetPrivilegedSecuredContentPort"></a>

```csharp
private void ResetPrivilegedSecuredContentPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput">ContentPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput">DeploymentChannelPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput">PrivilegedContentPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput">PrivilegedSecuredContentPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort">ContentPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort">DeploymentChannelPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort">PrivilegedContentPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort">PrivilegedSecuredContentPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentPortInput`<sup>Optional</sup> <a name="ContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPortInput"></a>

```csharp
public double ContentPortInput { get; }
```

- *Type:* double

---

##### `DeploymentChannelPortInput`<sup>Optional</sup> <a name="DeploymentChannelPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPortInput"></a>

```csharp
public double DeploymentChannelPortInput { get; }
```

- *Type:* double

---

##### `PrivilegedContentPortInput`<sup>Optional</sup> <a name="PrivilegedContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPortInput"></a>

```csharp
public double PrivilegedContentPortInput { get; }
```

- *Type:* double

---

##### `PrivilegedSecuredContentPortInput`<sup>Optional</sup> <a name="PrivilegedSecuredContentPortInput" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPortInput"></a>

```csharp
public double PrivilegedSecuredContentPortInput { get; }
```

- *Type:* double

---

##### `ContentPort`<sup>Required</sup> <a name="ContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.contentPort"></a>

```csharp
public double ContentPort { get; }
```

- *Type:* double

---

##### `DeploymentChannelPort`<sup>Required</sup> <a name="DeploymentChannelPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.deploymentChannelPort"></a>

```csharp
public double DeploymentChannelPort { get; }
```

- *Type:* double

---

##### `PrivilegedContentPort`<sup>Required</sup> <a name="PrivilegedContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedContentPort"></a>

```csharp
public double PrivilegedContentPort { get; }
```

- *Type:* double

---

##### `PrivilegedSecuredContentPort`<sup>Required</sup> <a name="PrivilegedSecuredContentPort" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.privilegedSecuredContentPort"></a>

```csharp
public double PrivilegedSecuredContentPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPortsOutputReference.property.internalValue"></a>

```csharp
public JavaServiceInstanceWeblogicServerPorts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaServiceInstance.JavaServiceInstanceWeblogicServerPorts">JavaServiceInstanceWeblogicServerPorts</a>

---



