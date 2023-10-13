# `provider`

Refer to the Terraform Registory for docs: [`oraclepaas`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-oraclepaas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OraclepaasProvider <a name="OraclepaasProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs oraclepaas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/provider"

provider.NewOraclepaasProvider(scope Construct, id *string, config OraclepaasProviderConfig) OraclepaasProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig">OraclepaasProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApplicationEndpoint` <a name="ResetApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint"></a>

```go
func ResetApplicationEndpoint()
```

##### `ResetDatabaseEndpoint` <a name="ResetDatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint"></a>

```go
func ResetDatabaseEndpoint()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetJavaEndpoint` <a name="ResetJavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint"></a>

```go
func ResetJavaEndpoint()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMysqlEndpoint` <a name="ResetMysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint"></a>

```go
func ResetMysqlEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/provider"

provider.OraclepaasProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/provider"

provider.OraclepaasProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/provider"

provider.OraclepaasProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput">ApplicationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput">DatabaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput">IdentityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput">JavaEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput">MysqlEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint">DatabaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint">JavaEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint">MysqlEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApplicationEndpointInput`<sup>Optional</sup> <a name="ApplicationEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput"></a>

```go
func ApplicationEndpointInput() *string
```

- *Type:* *string

---

##### `DatabaseEndpointInput`<sup>Optional</sup> <a name="DatabaseEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput"></a>

```go
func DatabaseEndpointInput() *string
```

- *Type:* *string

---

##### `IdentityDomainInput`<sup>Optional</sup> <a name="IdentityDomainInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput"></a>

```go
func IdentityDomainInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `JavaEndpointInput`<sup>Optional</sup> <a name="JavaEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput"></a>

```go
func JavaEndpointInput() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MysqlEndpointInput`<sup>Optional</sup> <a name="MysqlEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput"></a>

```go
func MysqlEndpointInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `ApplicationEndpoint`<sup>Optional</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint"></a>

```go
func ApplicationEndpoint() *string
```

- *Type:* *string

---

##### `DatabaseEndpoint`<sup>Optional</sup> <a name="DatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint"></a>

```go
func DatabaseEndpoint() *string
```

- *Type:* *string

---

##### `IdentityDomain`<sup>Optional</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain"></a>

```go
func IdentityDomain() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `JavaEndpoint`<sup>Optional</sup> <a name="JavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint"></a>

```go
func JavaEndpoint() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MysqlEndpoint`<sup>Optional</sup> <a name="MysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint"></a>

```go
func MysqlEndpoint() *string
```

- *Type:* *string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OraclepaasProviderConfig <a name="OraclepaasProviderConfig" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v7/provider"

&provider.OraclepaasProviderConfig {
	IdentityDomain: *string,
	Password: *string,
	User: *string,
	Alias: *string,
	ApplicationEndpoint: *string,
	DatabaseEndpoint: *string,
	Insecure: interface{},
	JavaEndpoint: *string,
	MaxRetries: *f64,
	MysqlEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password">Password</a></code> | <code>*string</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user">User</a></code> | <code>*string</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint">DatabaseEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint">JavaEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint">MysqlEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain"></a>

```go
IdentityDomain *string
```

- *Type:* *string

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#identity_domain OraclepaasProvider#identity_domain}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#password OraclepaasProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#user OraclepaasProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#alias OraclepaasProvider#alias}

---

##### `ApplicationEndpoint`<sup>Optional</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint"></a>

```go
ApplicationEndpoint *string
```

- *Type:* *string

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `DatabaseEndpoint`<sup>Optional</sup> <a name="DatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint"></a>

```go
DatabaseEndpoint *string
```

- *Type:* *string

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#insecure OraclepaasProvider#insecure}

---

##### `JavaEndpoint`<sup>Optional</sup> <a name="JavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint"></a>

```go
JavaEndpoint *string
```

- *Type:* *string

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#max_retries OraclepaasProvider#max_retries}

---

##### `MysqlEndpoint`<sup>Optional</sup> <a name="MysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint"></a>

```go
MysqlEndpoint *string
```

- *Type:* *string

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---



