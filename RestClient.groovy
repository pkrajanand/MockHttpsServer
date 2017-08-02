@Grab('org.codehaus.groovy.modules.http-builder:http-builder:0.7')

import groovyx.net.http.RESTClient
import static groovyx.net.http.ContentType.*

RESTClient client = new RESTClient( 'https://localhost:9443' )
def s = client.get([:]) 

println s

