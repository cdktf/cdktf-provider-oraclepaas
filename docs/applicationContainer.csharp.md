# `applicationContainer` Submodule <a name="`applicationContainer` Submodule" id="@cdktf/provider-oraclepaas.applicationContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationContainer <a name="ApplicationContainer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container oraclepaas_application_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainer(Construct Scope, string Id, ApplicationContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig">ApplicationContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment"></a>

```csharp
private void PutDeployment(ApplicationContainerDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest"></a>

```csharp
private void PutManifest(ApplicationContainerManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationContainerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

---

##### `ResetArchiveUrl` <a name="ResetArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl"></a>

```csharp
private void ResetArchiveUrl()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetDeploymentFile` <a name="ResetDeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile"></a>

```csharp
private void ResetDeploymentFile()
```

##### `ResetGitPassword` <a name="ResetGitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword"></a>

```csharp
private void ResetGitPassword()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository"></a>

```csharp
private void ResetGitRepository()
```

##### `ResetGitUsername` <a name="ResetGitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername"></a>

```csharp
private void ResetGitUsername()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancerSubnets` <a name="ResetLoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets"></a>

```csharp
private void ResetLoadBalancerSubnets()
```

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest"></a>

```csharp
private void ResetManifest()
```

##### `ResetManifestFile` <a name="ResetManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile"></a>

```csharp
private void ResetManifestFile()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetNotificationEmail` <a name="ResetNotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail"></a>

```csharp
private void ResetNotificationEmail()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetSubscriptionType` <a name="ResetSubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType"></a>

```csharp
private void ResetSubscriptionType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

ApplicationContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

ApplicationContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

ApplicationContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl">AppUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput">ArchiveUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput">DeploymentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput">GitPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput">GitUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput">LoadBalancerSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput">ManifestFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl">ArchiveUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile">DeploymentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword">GitPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository">GitRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername">GitUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets">LoadBalancerSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile">ManifestFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppUrl`<sup>Required</sup> <a name="AppUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl"></a>

```csharp
public string AppUrl { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment"></a>

```csharp
public ApplicationContainerDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a>

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest"></a>

```csharp
public ApplicationContainerManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts"></a>

```csharp
public ApplicationContainerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a>

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `ArchiveUrlInput`<sup>Optional</sup> <a name="ArchiveUrlInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput"></a>

```csharp
public string ArchiveUrlInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput"></a>

```csharp
public string[] AvailabilityDomainInput { get; }
```

- *Type:* string[]

---

##### `DeploymentFileInput`<sup>Optional</sup> <a name="DeploymentFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput"></a>

```csharp
public string DeploymentFileInput { get; }
```

- *Type:* string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput"></a>

```csharp
public ApplicationContainerDeployment DeploymentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `GitPasswordInput`<sup>Optional</sup> <a name="GitPasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput"></a>

```csharp
public string GitPasswordInput { get; }
```

- *Type:* string

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput"></a>

```csharp
public string GitRepositoryInput { get; }
```

- *Type:* string

---

##### `GitUsernameInput`<sup>Optional</sup> <a name="GitUsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput"></a>

```csharp
public string GitUsernameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnetsInput`<sup>Optional</sup> <a name="LoadBalancerSubnetsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput"></a>

```csharp
public string[] LoadBalancerSubnetsInput { get; }
```

- *Type:* string[]

---

##### `ManifestFileInput`<sup>Optional</sup> <a name="ManifestFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput"></a>

```csharp
public string ManifestFileInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput"></a>

```csharp
public ApplicationContainerManifest ManifestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput"></a>

```csharp
public string NotificationEmailInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput"></a>

```csharp
public string SubscriptionTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ArchiveUrl`<sup>Required</sup> <a name="ArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl"></a>

```csharp
public string ArchiveUrl { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain"></a>

```csharp
public string[] AvailabilityDomain { get; }
```

- *Type:* string[]

---

##### `DeploymentFile`<sup>Required</sup> <a name="DeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile"></a>

```csharp
public string DeploymentFile { get; }
```

- *Type:* string

---

##### `GitPassword`<sup>Required</sup> <a name="GitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword"></a>

```csharp
public string GitPassword { get; }
```

- *Type:* string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository"></a>

```csharp
public string GitRepository { get; }
```

- *Type:* string

---

##### `GitUsername`<sup>Required</sup> <a name="GitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername"></a>

```csharp
public string GitUsername { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnets`<sup>Required</sup> <a name="LoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets"></a>

```csharp
public string[] LoadBalancerSubnets { get; }
```

- *Type:* string[]

---

##### `ManifestFile`<sup>Required</sup> <a name="ManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile"></a>

```csharp
public string ManifestFile { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationContainerConfig <a name="ApplicationContainerConfig" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ArchiveUrl = null,
    string AuthType = null,
    string[] AvailabilityDomain = null,
    ApplicationContainerDeployment Deployment = null,
    string DeploymentFile = null,
    string GitPassword = null,
    string GitRepository = null,
    string GitUsername = null,
    string Id = null,
    string[] LoadBalancerSubnets = null,
    ApplicationContainerManifest Manifest = null,
    string ManifestFile = null,
    string Notes = null,
    string NotificationEmail = null,
    string Region = null,
    string Runtime = null,
    string SubscriptionType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ApplicationContainerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl">ArchiveUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile">DeploymentFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword">GitPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository">GitRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername">GitUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets">LoadBalancerSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile">ManifestFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes">Notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}.

---

##### `ArchiveUrl`<sup>Optional</sup> <a name="ArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl"></a>

```csharp
public string ArchiveUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain"></a>

```csharp
public string[] AvailabilityDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment"></a>

```csharp
public ApplicationContainerDeployment Deployment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment ApplicationContainer#deployment}

---

##### `DeploymentFile`<sup>Optional</sup> <a name="DeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile"></a>

```csharp
public string DeploymentFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `GitPassword`<sup>Optional</sup> <a name="GitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword"></a>

```csharp
public string GitPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_password ApplicationContainer#git_password}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository"></a>

```csharp
public string GitRepository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `GitUsername`<sup>Optional</sup> <a name="GitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername"></a>

```csharp
public string GitUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#git_username ApplicationContainer#git_username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerSubnets`<sup>Optional</sup> <a name="LoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets"></a>

```csharp
public string[] LoadBalancerSubnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest"></a>

```csharp
public ApplicationContainerManifest Manifest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest ApplicationContainer#manifest}

---

##### `ManifestFile`<sup>Optional</sup> <a name="ManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile"></a>

```csharp
public string ManifestFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `NotificationEmail`<sup>Optional</sup> <a name="NotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#region ApplicationContainer#region}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}.

---

##### `SubscriptionType`<sup>Optional</sup> <a name="SubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#tags ApplicationContainer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts"></a>

```csharp
public ApplicationContainerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#timeouts ApplicationContainer#timeouts}

---

### ApplicationContainerDeployment <a name="ApplicationContainerDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerDeployment {
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    double Instances = null,
    System.Collections.Generic.IDictionary<string, string> JavaSystemProperties = null,
    string Memory = null,
    string Notes = null,
    string[] SecureEnvironment = null,
    object Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#environment ApplicationContainer#environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances">Instances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#instances ApplicationContainer#instances}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties">JavaSystemProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#java_system_properties ApplicationContainer#java_system_properties}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#memory ApplicationContainer#memory}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes">Notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment">SecureEnvironment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#secure_environment ApplicationContainer#secure_environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services">Services</a></code> | <code>object</code> | services block. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#environment ApplicationContainer#environment}.

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#instances ApplicationContainer#instances}.

---

##### `JavaSystemProperties`<sup>Optional</sup> <a name="JavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JavaSystemProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#memory ApplicationContainer#memory}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `SecureEnvironment`<sup>Optional</sup> <a name="SecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment"></a>

```csharp
public string[] SecureEnvironment { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#secure_environment ApplicationContainer#secure_environment}.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services"></a>

```csharp
public object Services { get; set; }
```

- *Type:* object

services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#services ApplicationContainer#services}

---

### ApplicationContainerDeploymentServices <a name="ApplicationContainerDeploymentServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerDeploymentServices {
    string Identifier,
    string Name,
    string Password,
    string Type,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#identifier ApplicationContainer#identifier}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#password ApplicationContainer#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#username ApplicationContainer#username}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#identifier ApplicationContainer#identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#name ApplicationContainer#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#password ApplicationContainer#password}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#username ApplicationContainer#username}.

---

### ApplicationContainerManifest <a name="ApplicationContainerManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifest {
    object Clustered = null,
    string Command = null,
    string HealthCheckEndpoint = null,
    string Home = null,
    string Mode = null,
    string Notes = null,
    ApplicationContainerManifestRelease Release = null,
    ApplicationContainerManifestRuntime Runtime = null,
    double ShutdownTime = null,
    double StartupTime = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered">Clustered</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#clustered ApplicationContainer#clustered}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command">Command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#command ApplicationContainer#command}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint">HealthCheckEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home">Home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#home ApplicationContainer#home}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#mode ApplicationContainer#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes">Notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release">Release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | release block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime">ShutdownTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#shutdown_time ApplicationContainer#shutdown_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime">StartupTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#startup_time ApplicationContainer#startup_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}. |

---

##### `Clustered`<sup>Optional</sup> <a name="Clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered"></a>

```csharp
public object Clustered { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#clustered ApplicationContainer#clustered}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#command ApplicationContainer#command}.

---

##### `HealthCheckEndpoint`<sup>Optional</sup> <a name="HealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint"></a>

```csharp
public string HealthCheckEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home"></a>

```csharp
public string Home { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#home ApplicationContainer#home}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#mode ApplicationContainer#mode}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#notes ApplicationContainer#notes}.

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release"></a>

```csharp
public ApplicationContainerManifestRelease Release { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#release ApplicationContainer#release}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime"></a>

```csharp
public ApplicationContainerManifestRuntime Runtime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#runtime ApplicationContainer#runtime}

---

##### `ShutdownTime`<sup>Optional</sup> <a name="ShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime"></a>

```csharp
public double ShutdownTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

##### `StartupTime`<sup>Optional</sup> <a name="StartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime"></a>

```csharp
public double StartupTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#startup_time ApplicationContainer#startup_time}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#type ApplicationContainer#type}.

---

### ApplicationContainerManifestRelease <a name="ApplicationContainerManifestRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifestRelease {
    string BuildAttribute = null,
    string Commit = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute">BuildAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#build ApplicationContainer#build}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit">Commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#commit ApplicationContainer#commit}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#version ApplicationContainer#version}. |

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute"></a>

```csharp
public string BuildAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#build ApplicationContainer#build}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#commit ApplicationContainer#commit}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#version ApplicationContainer#version}.

---

### ApplicationContainerManifestRuntime <a name="ApplicationContainerManifestRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifestRuntime {
    string MajorVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion">MajorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#major_version ApplicationContainer#major_version}. |

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion"></a>

```csharp
public string MajorVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#major_version ApplicationContainer#major_version}.

---

### ApplicationContainerTimeouts <a name="ApplicationContainerTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#create ApplicationContainer#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#delete ApplicationContainer#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#create ApplicationContainer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/application_container#delete ApplicationContainer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationContainerDeploymentOutputReference <a name="ApplicationContainerDeploymentOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServices` <a name="PutServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices"></a>

```csharp
private void PutServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices.parameter.value"></a>

- *Type:* object

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetJavaSystemProperties` <a name="ResetJavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties"></a>

```csharp
private void ResetJavaSystemProperties()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetSecureEnvironment` <a name="ResetSecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment"></a>

```csharp
private void ResetSecureEnvironment()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services">Services</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput">JavaSystemPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput">SecureEnvironmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput">ServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties">JavaSystemProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment">SecureEnvironment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services"></a>

```csharp
public ApplicationContainerDeploymentServicesList Services { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `JavaSystemPropertiesInput`<sup>Optional</sup> <a name="JavaSystemPropertiesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JavaSystemPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `SecureEnvironmentInput`<sup>Optional</sup> <a name="SecureEnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput"></a>

```csharp
public string[] SecureEnvironmentInput { get; }
```

- *Type:* string[]

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput"></a>

```csharp
public object ServicesInput { get; }
```

- *Type:* object

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `JavaSystemProperties`<sup>Required</sup> <a name="JavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JavaSystemProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `SecureEnvironment`<sup>Required</sup> <a name="SecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment"></a>

```csharp
public string[] SecureEnvironment { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue"></a>

```csharp
public ApplicationContainerDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---


### ApplicationContainerDeploymentServicesList <a name="ApplicationContainerDeploymentServicesList" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerDeploymentServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get"></a>

```csharp
private ApplicationContainerDeploymentServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationContainerDeploymentServicesOutputReference <a name="ApplicationContainerDeploymentServicesOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerDeploymentServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationContainerManifestOutputReference <a name="ApplicationContainerManifestOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelease` <a name="PutRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease"></a>

```csharp
private void PutRelease(ApplicationContainerManifestRelease Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime"></a>

```csharp
private void PutRuntime(ApplicationContainerManifestRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `ResetClustered` <a name="ResetClustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered"></a>

```csharp
private void ResetClustered()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetHealthCheckEndpoint` <a name="ResetHealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint"></a>

```csharp
private void ResetHealthCheckEndpoint()
```

##### `ResetHome` <a name="ResetHome" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome"></a>

```csharp
private void ResetHome()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease"></a>

```csharp
private void ResetRelease()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetShutdownTime` <a name="ResetShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime"></a>

```csharp
private void ResetShutdownTime()
```

##### `ResetStartupTime` <a name="ResetStartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime"></a>

```csharp
private void ResetStartupTime()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release">Release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput">ClusteredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput">CommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput">HealthCheckEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput">HomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput">ReleaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput">ShutdownTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput">StartupTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered">Clustered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint">HealthCheckEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home">Home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime">ShutdownTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime">StartupTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release"></a>

```csharp
public ApplicationContainerManifestReleaseOutputReference Release { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime"></a>

```csharp
public ApplicationContainerManifestRuntimeOutputReference Runtime { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a>

---

##### `ClusteredInput`<sup>Optional</sup> <a name="ClusteredInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput"></a>

```csharp
public object ClusteredInput { get; }
```

- *Type:* object

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput"></a>

```csharp
public string CommandInput { get; }
```

- *Type:* string

---

##### `HealthCheckEndpointInput`<sup>Optional</sup> <a name="HealthCheckEndpointInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput"></a>

```csharp
public string HealthCheckEndpointInput { get; }
```

- *Type:* string

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput"></a>

```csharp
public string HomeInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput"></a>

```csharp
public ApplicationContainerManifestRelease ReleaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput"></a>

```csharp
public ApplicationContainerManifestRuntime RuntimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `ShutdownTimeInput`<sup>Optional</sup> <a name="ShutdownTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput"></a>

```csharp
public double ShutdownTimeInput { get; }
```

- *Type:* double

---

##### `StartupTimeInput`<sup>Optional</sup> <a name="StartupTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput"></a>

```csharp
public double StartupTimeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Clustered`<sup>Required</sup> <a name="Clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered"></a>

```csharp
public object Clustered { get; }
```

- *Type:* object

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `HealthCheckEndpoint`<sup>Required</sup> <a name="HealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint"></a>

```csharp
public string HealthCheckEndpoint { get; }
```

- *Type:* string

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home"></a>

```csharp
public string Home { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `ShutdownTime`<sup>Required</sup> <a name="ShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime"></a>

```csharp
public double ShutdownTime { get; }
```

- *Type:* double

---

##### `StartupTime`<sup>Required</sup> <a name="StartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime"></a>

```csharp
public double StartupTime { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue"></a>

```csharp
public ApplicationContainerManifest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---


### ApplicationContainerManifestReleaseOutputReference <a name="ApplicationContainerManifestReleaseOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifestReleaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute"></a>

```csharp
private void ResetBuildAttribute()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput">BuildAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput"></a>

```csharp
public string BuildAttributeInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute"></a>

```csharp
public string BuildAttribute { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue"></a>

```csharp
public ApplicationContainerManifestRelease InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---


### ApplicationContainerManifestRuntimeOutputReference <a name="ApplicationContainerManifestRuntimeOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerManifestRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput">MajorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion">MajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MajorVersionInput`<sup>Optional</sup> <a name="MajorVersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput"></a>

```csharp
public string MajorVersionInput { get; }
```

- *Type:* string

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion"></a>

```csharp
public string MajorVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue"></a>

```csharp
public ApplicationContainerManifestRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---


### ApplicationContainerTimeoutsOutputReference <a name="ApplicationContainerTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new ApplicationContainerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



