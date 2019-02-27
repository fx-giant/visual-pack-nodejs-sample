# Getting started
This is a guide on how to create binding on Dimension and Measurement to build your own visual pack.

## Prerequistie
* Visual pack sample

## Binding dimension and measurement
1. Go to **quadrant-properties.html** and look for html tag as shown below.

```
<quadrant-control params="controlType:'single-dimension-quadrant-control',
                          labelKey: 'Title',
                          parameterKey: 'titlePath', 
                          controlType: 'simpleSingleBinding', 
                          bindingType: 'dimension', 
                          quadrantViewModel: quadrantViewModel">
</quadrant-control>
```
2. Change your labelKey to your preference label and **parameterKey** to variable name of parameter. 
(variable name will be used in next section)
3. Change bindingType to **'dimension'** for dimension and **'measurement'** for measurment. An example is shown below.
* Dimension example
```
<quadrant-control params="controlType:'single-dimension-quadrant-control',
                          labelKey: 'Label',
                          parameterKey: 'Source',
                          controlType: 'simpleSingleBinding', 
                          bindingType: 'dimension',
                          quadrantViewModel: quadrantViewModel">
</quadrant-control>
```
* Measurement example
```
<quadrant-control params="controlType: 'single-dimension-quadrant-control',
                          labelKey: 'Label',
                          parameterKey: 'Value', 
                          controlType: 'simpleSingleBinding', 
                          bindingType: 'measurement', 
                          quadrantViewModel: quadrantViewModel">
</quadrant-control>
```

4. Go to **quadrant-properties.js** and look for properties.
5. Change all the property names to the variable name (parameterKey) you set on **quadrant-properties.html**. 
* propertyName example
```
const properties = [
    {propertyName: "Source"},
    {propertyName: "Value"},
    {propertyName: "Target"} 
];
```
6. Go to **program.js** and look for visual().
7. Change all the parameters to your parameterKeys.
* Parameters example
```
visual() {
    return {
      parameters: {
        Source: "RedeemLocation.LocationName",
        Target: "RedeemLocation.Address",
        Value: "RedeemLocation.GoogleMapUrl"
      }
    }
},
```
> Notes: You can add or remove the number of parameters based on the visual pack needs. 


