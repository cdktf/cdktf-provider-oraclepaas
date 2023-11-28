# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-oraclepaas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OraclepaasProvider <a name="OraclepaasProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs oraclepaas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new OraclepaasProvider(Construct Scope, string Id, OraclepaasProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig">OraclepaasProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig">OraclepaasProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint">ResetApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint">ResetDatabaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint">ResetJavaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint">ResetMysqlEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApplicationEndpoint` <a name="ResetApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint"></a>

```csharp
private void ResetApplicationEndpoint()
```

##### `ResetDatabaseEndpoint` <a name="ResetDatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint"></a>

```csharp
private void ResetDatabaseEndpoint()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetJavaEndpoint` <a name="ResetJavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint"></a>

```csharp
private void ResetJavaEndpoint()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMysqlEndpoint` <a name="ResetMysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint"></a>

```csharp
private void ResetMysqlEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OraclepaasProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

OraclepaasProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

OraclepaasProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

OraclepaasProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

OraclepaasProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OraclepaasProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OraclepaasProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OraclepaasProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OraclepaasProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput">ApplicationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput">DatabaseEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput">IdentityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput">JavaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput">MysqlEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint">DatabaseEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint">JavaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint">MysqlEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApplicationEndpointInput`<sup>Optional</sup> <a name="ApplicationEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput"></a>

```csharp
public string ApplicationEndpointInput { get; }
```

- *Type:* string

---

##### `DatabaseEndpointInput`<sup>Optional</sup> <a name="DatabaseEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput"></a>

```csharp
public string DatabaseEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityDomainInput`<sup>Optional</sup> <a name="IdentityDomainInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput"></a>

```csharp
public string IdentityDomainInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `JavaEndpointInput`<sup>Optional</sup> <a name="JavaEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput"></a>

```csharp
public string JavaEndpointInput { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MysqlEndpointInput`<sup>Optional</sup> <a name="MysqlEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput"></a>

```csharp
public string MysqlEndpointInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `ApplicationEndpoint`<sup>Optional</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint"></a>

```csharp
public string ApplicationEndpoint { get; }
```

- *Type:* string

---

##### `DatabaseEndpoint`<sup>Optional</sup> <a name="DatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint"></a>

```csharp
public string DatabaseEndpoint { get; }
```

- *Type:* string

---

##### `IdentityDomain`<sup>Optional</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `JavaEndpoint`<sup>Optional</sup> <a name="JavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint"></a>

```csharp
public string JavaEndpoint { get; }
```

- *Type:* string

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MysqlEndpoint`<sup>Optional</sup> <a name="MysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint"></a>

```csharp
public string MysqlEndpoint { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OraclepaasProviderConfig <a name="OraclepaasProviderConfig" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oraclepaas;

new OraclepaasProviderConfig {
    string IdentityDomain,
    string Password,
    string User,
    string Alias = null,
    string ApplicationEndpoint = null,
    string DatabaseEndpoint = null,
    object Insecure = null,
    string JavaEndpoint = null,
    double MaxRetries = null,
    string MysqlEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password">Password</a></code> | <code>string</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user">User</a></code> | <code>string</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code>string</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint">DatabaseEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint">JavaEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint">MysqlEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; set; }
```

- *Type:* string

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#identity_domain OraclepaasProvider#identity_domain}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#password OraclepaasProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#user OraclepaasProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#alias OraclepaasProvider#alias}

---

##### `ApplicationEndpoint`<sup>Optional</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint"></a>

```csharp
public string ApplicationEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `DatabaseEndpoint`<sup>Optional</sup> <a name="DatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint"></a>

```csharp
public string DatabaseEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#insecure OraclepaasProvider#insecure}

---

##### `JavaEndpoint`<sup>Optional</sup> <a name="JavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint"></a>

```csharp
public string JavaEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#max_retries OraclepaasProvider#max_retries}

---

##### `MysqlEndpoint`<sup>Optional</sup> <a name="MysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint"></a>

```csharp
public string MysqlEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---



