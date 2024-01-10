# `dataOraclepaasDatabaseServiceInstance` Submodule <a name="`dataOraclepaasDatabaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOraclepaasDatabaseServiceInstance <a name="DataOraclepaasDatabaseServiceInstance" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

dataoraclepaasdatabaseserviceinstance.NewDataOraclepaasDatabaseServiceInstance(scope Construct, id *string, config DataOraclepaasDatabaseServiceInstanceConfig) DataOraclepaasDatabaseServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOraclepaasDatabaseServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

dataoraclepaasdatabaseserviceinstance.DataOraclepaasDatabaseServiceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

dataoraclepaasdatabaseserviceinstance.DataOraclepaasDatabaseServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

dataoraclepaasdatabaseserviceinstance.DataOraclepaasDatabaseServiceInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

dataoraclepaasdatabaseserviceinstance.DataOraclepaasDatabaseServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOraclepaasDatabaseServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOraclepaasDatabaseServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOraclepaasDatabaseServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOraclepaasDatabaseServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl">ApexUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination">BackupDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense">BringYourOwnLicense</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer">CloudStorageContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName">ComputeSiteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl">EnterpriseManagerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase">FailoverDatabase</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl">GlassfishUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage">HighPerformanceStorage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp">HybridDisasterRecoveryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations">IpReservations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl">MonitorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl"></a>

```go
func ApexUrl() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupDestination`<sup>Required</sup> <a name="BackupDestination" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination"></a>

```go
func BackupDestination() *string
```

- *Type:* *string

---

##### `BringYourOwnLicense`<sup>Required</sup> <a name="BringYourOwnLicense" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense"></a>

```go
func BringYourOwnLicense() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `CloudStorageContainer`<sup>Required</sup> <a name="CloudStorageContainer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer"></a>

```go
func CloudStorageContainer() *string
```

- *Type:* *string

---

##### `ComputeSiteName`<sup>Required</sup> <a name="ComputeSiteName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName"></a>

```go
func ComputeSiteName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `EnterpriseManagerUrl`<sup>Required</sup> <a name="EnterpriseManagerUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl"></a>

```go
func EnterpriseManagerUrl() *string
```

- *Type:* *string

---

##### `FailoverDatabase`<sup>Required</sup> <a name="FailoverDatabase" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase"></a>

```go
func FailoverDatabase() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GlassfishUrl`<sup>Required</sup> <a name="GlassfishUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl"></a>

```go
func GlassfishUrl() *string
```

- *Type:* *string

---

##### `HighPerformanceStorage`<sup>Required</sup> <a name="HighPerformanceStorage" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage"></a>

```go
func HighPerformanceStorage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HybridDisasterRecoveryIp`<sup>Required</sup> <a name="HybridDisasterRecoveryIp" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp"></a>

```go
func HybridDisasterRecoveryIp() *string
```

- *Type:* *string

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain"></a>

```go
func IdentityDomain() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `IpReservations`<sup>Required</sup> <a name="IpReservations" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations"></a>

```go
func IpReservations() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `MonitorUrl`<sup>Required</sup> <a name="MonitorUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl"></a>

```go
func MonitorUrl() *string
```

- *Type:* *string

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `PluggableDatabaseName`<sup>Required</sup> <a name="PluggableDatabaseName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName"></a>

```go
func PluggableDatabaseName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOraclepaasDatabaseServiceInstanceConfig <a name="DataOraclepaasDatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-oraclepaas-go/oraclepaas/v8/dataoraclepaasdatabaseserviceinstance"

&dataoraclepaasdatabaseserviceinstance.DataOraclepaasDatabaseServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



