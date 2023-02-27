# `mysqlAccessRule` Submodule <a name="`mysqlAccessRule` Submodule" id="@cdktf/provider-oraclepaas.mysqlAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlAccessRule <a name="MysqlAccessRule" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule oraclepaas_mysql_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new MysqlAccessRule(Construct Scope, string Id, MysqlAccessRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig">MysqlAccessRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig">MysqlAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlAccessRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

MysqlAccessRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

MysqlAccessRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

MysqlAccessRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput">PortsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput">ServiceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports">Ports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts"></a>

```csharp
public MysqlAccessRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput"></a>

```csharp
public string PortsInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ServiceInstanceIdInput`<sup>Optional</sup> <a name="ServiceInstanceIdInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput"></a>

```csharp
public string ServiceInstanceIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports"></a>

```csharp
public string Ports { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId"></a>

```csharp
public string ServiceInstanceId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlAccessRuleConfig <a name="MysqlAccessRuleConfig" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new MysqlAccessRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Destination,
    string Name,
    string Ports,
    string ServiceInstanceId,
    string Source,
    string Description = null,
    object Enabled = null,
    string Id = null,
    string Protocol = null,
    MysqlAccessRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports">Ports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}.

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports"></a>

```csharp
public string Ports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}.

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId"></a>

```csharp
public string ServiceInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts"></a>

```csharp
public MysqlAccessRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#timeouts MysqlAccessRule#timeouts}

---

### MysqlAccessRuleTimeouts <a name="MysqlAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new MysqlAccessRuleTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlAccessRuleTimeoutsOutputReference <a name="MysqlAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new MysqlAccessRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


