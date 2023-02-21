# `mysqlAccessRule` Submodule <a name="`mysqlAccessRule` Submodule" id="@cdktf/provider-oraclepaas.mysqlAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlAccessRule <a name="MysqlAccessRule" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule oraclepaas_mysql_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protocol: str = None,
  timeouts: MysqlAccessRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.ports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#timeouts MysqlAccessRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput">ports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports">ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts"></a>

```python
timeouts: MysqlAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput"></a>

```python
ports_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MysqlAccessRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports"></a>

```python
ports: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlAccessRuleConfig <a name="MysqlAccessRuleConfig" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  ports: str,
  service_instance_id: str,
  source: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protocol: str = None,
  timeouts: MysqlAccessRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports">ports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports"></a>

```python
ports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts"></a>

```python
timeouts: MysqlAccessRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#timeouts MysqlAccessRule#timeouts}

---

### MysqlAccessRuleTimeouts <a name="MysqlAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRuleTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlAccessRuleTimeoutsOutputReference <a name="MysqlAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import mysql_access_rule

mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MysqlAccessRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>, cdktf.IResolvable]

---



