# `databaseAccessRule` Submodule <a name="`databaseAccessRule` Submodule" id="@cdktf/provider-oraclepaas.databaseAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAccessRule <a name="DatabaseAccessRule" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule oraclepaas_database_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  destination: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: DatabaseAccessRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#description DatabaseAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#name DatabaseAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#ports DatabaseAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#source DatabaseAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#destination DatabaseAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#enabled DatabaseAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#id DatabaseAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#description DatabaseAccessRule#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#name DatabaseAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.ports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#ports DatabaseAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#source DatabaseAccessRule#source}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#destination DatabaseAccessRule#destination}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#enabled DatabaseAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#id DatabaseAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#timeouts DatabaseAccessRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#create DatabaseAccessRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#delete DatabaseAccessRule#delete}.

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRule.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference">DatabaseAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.portsInput">ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.ports">ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeouts"></a>

```python
timeouts: DatabaseAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference">DatabaseAccessRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.portsInput"></a>

```python
ports_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DatabaseAccessRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.ports"></a>

```python
ports: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAccessRuleConfig <a name="DatabaseAccessRuleConfig" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  destination: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: DatabaseAccessRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#description DatabaseAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#name DatabaseAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#ports DatabaseAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#source DatabaseAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#destination DatabaseAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#enabled DatabaseAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#id DatabaseAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#description DatabaseAccessRule#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#name DatabaseAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.ports"></a>

```python
ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#ports DatabaseAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#source DatabaseAccessRule#source}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#destination DatabaseAccessRule#destination}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#enabled DatabaseAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#id DatabaseAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.timeouts"></a>

```python
timeouts: DatabaseAccessRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#timeouts DatabaseAccessRule#timeouts}

---

### DatabaseAccessRuleTimeouts <a name="DatabaseAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRuleTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#create DatabaseAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#delete DatabaseAccessRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#create DatabaseAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/database_access_rule#delete DatabaseAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAccessRuleTimeoutsOutputReference <a name="DatabaseAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import database_access_rule

databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatabaseAccessRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>, cdktf.IResolvable]

---



