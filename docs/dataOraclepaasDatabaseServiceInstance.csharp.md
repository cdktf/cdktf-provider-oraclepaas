# `data_oraclepaas_database_service_instance`

Refer to the Terraform Registory for docs: [`data_oraclepaas_database_service_instance`](https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance).

# `dataOraclepaasDatabaseServiceInstance` Submodule <a name="`dataOraclepaasDatabaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOraclepaasDatabaseServiceInstance <a name="DataOraclepaasDatabaseServiceInstance" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new DataOraclepaasDatabaseServiceInstance(Construct Scope, string Id, DataOraclepaasDatabaseServiceInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

DataOraclepaasDatabaseServiceInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

DataOraclepaasDatabaseServiceInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

DataOraclepaasDatabaseServiceInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl">ApexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination">BackupDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName">ComputeSiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl">EnterpriseManagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase">FailoverDatabase</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl">GlassfishUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage">HighPerformanceStorage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp">HybridDisasterRecoveryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations">IpReservations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl">MonitorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl"></a>

```csharp
public string ApexUrl { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination"></a>

```csharp
public string BackupDestination { get; }
```

- *Type:* string

---

##### `BringYourOwnLicense`<sup>Required</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense"></a>

```csharp
public IResolvable BringYourOwnLicense { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer"></a>

```csharp
public string CloudStorageContainer { get; }
```

- *Type:* string

---

##### `ComputeSiteName`<sup>Required</sup> <a name="ComputeSiteName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName"></a>

```csharp
public string ComputeSiteName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnterpriseManagerUrl`<sup>Required</sup> <a name="EnterpriseManagerUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl"></a>

```csharp
public string EnterpriseManagerUrl { get; }
```

- *Type:* string

---

##### `FailoverDatabase`<sup>Required</sup> <a name="FailoverDatabase" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase"></a>

```csharp
public IResolvable FailoverDatabase { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GlassfishUrl`<sup>Required</sup> <a name="GlassfishUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl"></a>

```csharp
public string GlassfishUrl { get; }
```

- *Type:* string

---

##### `HighPerformanceStorage`<sup>Required</sup> <a name="HighPerformanceStorage" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage"></a>

```csharp
public IResolvable HighPerformanceStorage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HybridDisasterRecoveryIp`<sup>Required</sup> <a name="HybridDisasterRecoveryIp" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp"></a>

```csharp
public string HybridDisasterRecoveryIp { get; }
```

- *Type:* string

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations"></a>

```csharp
public string IpReservations { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `MonitorUrl`<sup>Required</sup> <a name="MonitorUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl"></a>

```csharp
public string MonitorUrl { get; }
```

- *Type:* string

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; }
```

- *Type:* string

---

##### `PluggableDatabaseName`<sup>Required</sup> <a name="PluggableDatabaseName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName"></a>

```csharp
public string PluggableDatabaseName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOraclepaasDatabaseServiceInstanceConfig <a name="DataOraclepaasDatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new DataOraclepaasDatabaseServiceInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



