# `javaAccessRule` Submodule <a name="`javaAccessRule` Submodule" id="@cdktf/provider-oraclepaas.javaAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JavaAccessRule <a name="JavaAccessRule" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule oraclepaas_java_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  destination: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protocol: str = None,
  timeouts: JavaAccessRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#description JavaAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#destination JavaAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#name JavaAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#ports JavaAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#service_instance_id JavaAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#source JavaAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#enabled JavaAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#id JavaAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#protocol JavaAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#description JavaAccessRule#description}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#destination JavaAccessRule#destination}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#name JavaAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.ports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#ports JavaAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#service_instance_id JavaAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#source JavaAccessRule#source}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#enabled JavaAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#id JavaAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#protocol JavaAccessRule#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#timeouts JavaAccessRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#create JavaAccessRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#delete JavaAccessRule#delete}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JavaAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JavaAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JavaAccessRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JavaAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JavaAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference">JavaAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.portsInput">ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.ports">ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.timeouts"></a>

```python
timeouts: JavaAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference">JavaAccessRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.portsInput"></a>

```python
ports_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, JavaAccessRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.ports"></a>

```python
ports: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JavaAccessRuleConfig <a name="JavaAccessRuleConfig" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  destination: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protocol: str = None,
  timeouts: JavaAccessRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#description JavaAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#destination JavaAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#name JavaAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#ports JavaAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#service_instance_id JavaAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#source JavaAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#enabled JavaAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#id JavaAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#protocol JavaAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#description JavaAccessRule#description}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#destination JavaAccessRule#destination}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#name JavaAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.ports"></a>

```python
ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#ports JavaAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#service_instance_id JavaAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#source JavaAccessRule#source}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#enabled JavaAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#id JavaAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#protocol JavaAccessRule#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleConfig.property.timeouts"></a>

```python
timeouts: JavaAccessRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#timeouts JavaAccessRule#timeouts}

---

### JavaAccessRuleTimeouts <a name="JavaAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRuleTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#create JavaAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#delete JavaAccessRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#create JavaAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/java_access_rule#delete JavaAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### JavaAccessRuleTimeoutsOutputReference <a name="JavaAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import java_access_rule

javaAccessRule.JavaAccessRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JavaAccessRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-oraclepaas.javaAccessRule.JavaAccessRuleTimeouts">JavaAccessRuleTimeouts</a>]

---



